import { useEffect, useRef } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'vertical' | 'horizontal' | 'mixed';

export default function BinaryRain({ 
  opacity = 0.15, 
  color = '#0ea5e9',
  direction = 'down'
}: { 
  opacity?: number, 
  color?: string,
  direction?: Direction
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastDrawTime = 0;
    const fps = 20;
    const interval = 1000 / fps;

    const chars = '01';
    const fontSize = 14;
    
    interface Stream {
      x: number;
      y: number;
      speed: number;
      characters: string[];
      maxLength: number;
      dir: 'up' | 'down' | 'left' | 'right';
    }
    
    let streams: Stream[] = [];

    const initStreams = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
      
      streams = [];
      
      const createStream = (dir: 'up' | 'down' | 'left' | 'right', x: number, y: number) => {
        return {
          x,
          y,
          speed: 1 + Math.random() * 3,
          characters: [],
          maxLength: 10 + Math.random() * 20,
          dir
        };
      };

      // Vertical streams
      const includeVertical = direction === 'down' || direction === 'up' || direction === 'vertical' || direction === 'mixed';
      if (includeVertical) {
        const columns = Math.floor(canvas.width / fontSize);
        for (let i = 0; i < columns; i++) {
          let d: 'up' | 'down';
          if (direction === 'down') d = 'down';
          else if (direction === 'up') d = 'up';
          else d = Math.random() > 0.5 ? 'down' : 'up';
          
          streams.push(createStream(d, i * fontSize, Math.random() * canvas.height));
        }
      }

      // Horizontal streams
      const includeHorizontal = direction === 'left' || direction === 'right' || direction === 'horizontal' || direction === 'mixed';
      if (includeHorizontal) {
        const rows = Math.floor(canvas.height / fontSize);
        for (let i = 0; i < rows; i++) {
          let d: 'left' | 'right';
          if (direction === 'left') d = 'left';
          else if (direction === 'right') d = 'right';
          else d = Math.random() > 0.5 ? 'right' : 'left';
          
          streams.push(createStream(d, Math.random() * canvas.width, i * fontSize));
        }
      }
    };

    const resize = () => {
      initStreams();
    };

    window.addEventListener('resize', resize);
    setTimeout(resize, 0);

    const draw = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(draw);

      const deltaTime = currentTime - lastDrawTime;
      if (deltaTime < interval) return;

      lastDrawTime = currentTime - (deltaTime % interval);

      ctx.fillStyle = 'rgba(2, 6, 23, 0.15)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      streams.forEach(stream => {
        const char = chars.charAt(Math.floor(Math.random() * chars.length));
        stream.characters.push(char);
        
        if (stream.characters.length > stream.maxLength) {
          stream.characters.shift();
        }

        stream.characters.forEach((c, index) => {
          let xPos = stream.x;
          let yPos = stream.y;

          if (stream.dir === 'down') yPos += index * fontSize;
          else if (stream.dir === 'up') yPos -= index * fontSize;
          else if (stream.dir === 'right') xPos += index * fontSize;
          else if (stream.dir === 'left') xPos -= index * fontSize;
          
          if (xPos < -fontSize || xPos > canvas.width + fontSize || yPos < -fontSize || yPos > canvas.height + fontSize) return;

          const isHead = index === stream.characters.length - 1;
          
          if (isHead) {
            ctx.fillStyle = '#fff';
            ctx.shadowBlur = 8;
            ctx.shadowColor = color;
          } else {
            const alpha = (index / stream.characters.length) * 0.8;
            ctx.fillStyle = `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
            ctx.shadowBlur = 0;
          }

          ctx.fillText(c, xPos, yPos);
        });

        if (stream.dir === 'down') {
          stream.y += stream.speed;
          if (stream.y > canvas.height) stream.y = -stream.maxLength * fontSize;
        } else if (stream.dir === 'up') {
          stream.y -= stream.speed;
          if (stream.y < -stream.maxLength * fontSize) stream.y = canvas.height;
        } else if (stream.dir === 'right') {
          stream.x += stream.speed;
          if (stream.x > canvas.width) stream.x = -stream.maxLength * fontSize;
        } else if (stream.dir === 'left') {
          stream.x -= stream.speed;
          if (stream.x < -stream.maxLength * fontSize) stream.x = canvas.width;
        }
      });
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, direction]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity }}
    />
  );
}
