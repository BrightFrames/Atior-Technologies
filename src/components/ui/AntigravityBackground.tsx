"use client";

import { useEffect, useRef } from "react";

export default function AntigravityBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const colors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853", "#8A2BE2"]; // Google-like colors + purple string
    
    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      angle: number;
      distance: number;
      size: number;
      color: string;
      speed: number;

      constructor(centerX: number, centerY: number) {
        this.angle = Math.random() * Math.PI * 2;
        this.distance = Math.random() * (Math.max(width, height) / 1.5) + 50;
        
        this.baseX = centerX + Math.cos(this.angle) * this.distance;
        this.baseY = centerY + Math.sin(this.angle) * this.distance;
        this.x = this.baseX;
        this.y = this.baseY;
        
        // Size variation for dashes
        this.size = Math.random() * 3 + 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        // Rotation speed
        this.speed = (Math.random() - 0.5) * 0.002;
      }

      update(mouseX: number, mouseY: number, centerX: number, centerY: number) {
        // Slow rotation
        this.angle += this.speed;
        this.baseX = centerX + Math.cos(this.angle) * this.distance;
        this.baseY = centerY + Math.sin(this.angle) * this.distance;

        // Mouse interaction (repel)
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Radius of mouse influence
        const maxDist = 200;
        
        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          // Push away from mouse
          this.x -= (dx / dist) * force * 15;
          this.y -= (dy / dist) * force * 15;
        } else {
          // Return to base position
          this.x += (this.baseX - this.x) * 0.05;
          this.y += (this.baseY - this.y) * 0.05;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        // Align dash roughly pointing outward or along the curve
        ctx.rotate(this.angle + (Math.PI / 4)); 
        
        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.max(0.2, 1 - (this.distance / 1200)); // fade out further away
        
        // Draw oblong rounded dash
        ctx.beginPath();
        ctx.roundRect(-this.size/2, -1, this.size, 2, 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    let particles: Particle[] = [];
    const initParticles = () => {
      particles = [];
      const numParticles = Math.floor(width * height / 2000); // 50% more particles
      const centerX = width / 2;
      const centerY = height / 3; // Center a bit higher up for hero section

      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(centerX, centerY));
      }
    };

    initParticles();

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY - canvas.getBoundingClientRect().top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      const centerX = width / 2;
      const centerY = height / 3;

      particles.forEach(p => {
        p.update(mouseX, mouseY, centerX, centerY);
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none -z-30"
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
