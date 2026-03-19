<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/ca4fbb4c-80f8-4802-84dc-f95cfc57338f

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Google Sheets Integration Setup

To make the contact forms and portfolio data work on your own host, you need to set up a Google Apps Script:

1. Create a new **Google Sheet**.
2. **IMPORTANT:** Create a sheet (tab) named **"Portfolio"** for your project data.
   - **Column Structure:**
     - **Col A:** Category
     - **Col B:** Title
     - **Col C:** Description
     - **Col D:** Image URL
     - **Col E:** Project URL
3. **IMPORTANT:** Create another sheet (tab) named **"Contact Messages"** for form submissions.
4. Go to **Extensions** > **Apps Script**.
5. Replace the code in the editor with the following:

```javascript
/**
 * Handle POST requests (Form Submissions)
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetName = data.sheetName || 'Sheet1';
    var sheet = ss.getSheetByName(sheetName);
    
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      // Add headers if new sheet
      var headers = Object.keys(data);
      sheet.appendRow(headers);
    }
    
    var row = [];
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    for (var i = 0; i < headers.length; i++) {
      row.push(data[headers[i]] || "");
    }
    
    // Check if there are any new keys in data that aren't in headers
    var dataKeys = Object.keys(data);
    for (var j = 0; j < dataKeys.length; j++) {
      if (headers.indexOf(dataKeys[j]) === -1) {
        sheet.getRange(1, sheet.getLastColumn() + 1).setValue(dataKeys[j]);
        row.push(data[dataKeys[j]]);
      }
    }
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET requests (Data Fetching for Portfolio)
 */
function doGet(e) {
  try {
    var action = e.parameter.action;
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    if (action === 'getPortfolio') {
      var sheet = ss.getSheetByName('Portfolio'); // Make sure your sheet is named 'Portfolio'
      if (!sheet) {
        return ContentService.createTextOutput(JSON.stringify({ error: 'Portfolio sheet not found' }))
          .setMimeType(ContentService.MimeType.JSON);
      }
      
      var data = sheet.getDataRange().getValues();
      var headers = data[0];
      var result = [];
      
      for (var i = 1; i < data.length; i++) {
        var row = data[i];
        var obj = {};
        for (var j = 0; j < headers.length; j++) {
          // Map columns to the expected PortfolioItem interface
          var header = headers[j].toString().toLowerCase();
          var value = row[j];
          
          if (header.includes('category')) obj.category = value;
          else if (header.includes('title')) obj.title = value;
          else if (header.includes('description')) obj.description = value;
          else if (header.includes('image')) obj.imageUrl = value;
          else if (header.includes('url')) obj.projectUrl = value;
          else obj[headers[j]] = value;
        }
        if (obj.title) result.push(obj);
      }
      
      return ContentService.createTextOutput(JSON.stringify(result))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Deploy** > **New Deployment**.
5. Select **Web App**.
6. Set **Execute as** to "Me" and **Who has access** to "Anyone".
7. Click **Deploy** and authorize the script.
8. Copy the **Web App URL**.
9. In your hosting environment (or `.env.production` file), set `VITE_CONTACT_FORM_WEB_APP_URL` to this URL.

## Production Deployment

When you are ready to publish your website:

1. **Configure Environment Variables (CRITICAL):**
   Ensure your hosting provider has the following environment variables set in their dashboard:
   - `CONTACT_FORM_WEB_APP_URL`: Your deployed Google Apps Script URL.
   - `GOOGLE_SHEET_ID`: Your Google Sheet ID.
   - `GEMINI_API_KEY`: Your Gemini API key.

   **Deployment to Render:**
   1. Go to your **Render Dashboard** > **Web Service** > **Environment**.
   2. Add the environment variables listed above.
   3. **IMPORTANT:** After adding variables, you **MUST** trigger a new deployment via **Manual Deploy** -> **Clear Cache and Redeploy**.
   4. This ensures that Vite picks up the new variables during the build process.

   **Deployment to HostAfrica (Shared Hosting):**
   1. Run `npm run build` locally to generate the `dist` folder.
   2. Upload the contents of the `dist` folder to your `public_html` directory via FTP or cPanel File Manager.
   3. Ensure the `.htaccess` file is included in the upload to handle routing.
   4. The chatbot will automatically use a rule-based system if no `GEMINI_API_KEY` is provided.

2. **Build the Project:**
   Run the build command to generate the production-ready files:
   ```bash
   npm run build
   ```

3. **Upload Files:**
   Upload the contents of the `dist` folder to your web server (e.g., via FTP, cPanel, or a hosting service like Netlify/Vercel).

4. **Configure Routing:**
   Since this is a Single Page Application (SPA), ensure your server is configured to serve `index.html` for all routes.
   - **Apache (.htaccess):**
     ```apache
     <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
     </IfModule>
     ```
   - **Nginx:**
     ```nginx
     location / {
       try_files $uri $uri/ /index.html;
     }
     ```
