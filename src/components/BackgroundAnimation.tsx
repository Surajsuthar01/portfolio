
import { useEffect, useRef } from 'react';
import { useTheme } from '@/hooks/use-theme';

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Create particles
    const particlesArray: Particle[] = [];
    const particleCount = Math.min(10000, window.innerWidth / 5);
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.45;
        this.speedY = Math.random() * 0.5 - 0.45;
        this.color = theme === 'dark' 
          ? `rgba(${Math.floor(Math.random() * 50) + 100}, ${Math.floor(Math.random() * 50) + 100}, ${Math.floor(Math.random() * 155) + 100}, ${Math.random() * 0.5 + 0.1})`
          : `rgba(${Math.floor(Math.random() * 100) + 50}, ${Math.floor(Math.random() * 100) + 50}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.3 + 0.1})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particlesArray.push(new Particle());
    }
    
    // Connect particles with lines
    function connectParticles() {
      const maxDistance = 150;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = theme === 'dark' 
              ? `rgba(120, 200, 255, ${opacity * 0.6})`
              : `rgba(200, 80, 200, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }
    
    // Animate
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      if (theme === 'dark') {
        gradient.addColorStop(0, 'rgba(20, 20, 40, 0.4)');
        gradient.addColorStop(1, 'rgba(40, 20, 60, 0.4)');
      } else {
        gradient.addColorStop(0, 'rgba(240, 240, 255, 0.4)');
        gradient.addColorStop(1, 'rgba(230, 240, 255, 0.4)');
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connectParticles();
    }
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, [theme]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
};

export default BackgroundAnimation;
