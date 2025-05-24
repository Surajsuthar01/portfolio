import { useState, useEffect, useRef } from 'react';
import { ArrowDown, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const { theme, setTheme } = useTheme();
  const [textIndex, setTextIndex] = useState(0);
  const textOptions = [
    "DevOps Engineer",
    "Cloud Native Architect",
    "Kubernetes Specialist",
    "Infrastructure Automation Expert",
  ];
  const containerRef = useRef(null);
  const floatingParticlesRef = useRef(null);

  // Text cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % textOptions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // GSAP animations
  useGSAP(() => {
    // Background elements animation
    gsap.fromTo(
      ".bg-grid > div",
      { opacity: 0, scale: 0.8 },
      { opacity: 0.03, scale: 1, duration: 2, ease: "power3.out" }
    );

    // Floating particles animation
    gsap.to(".particle", {
      y: -50,
      x: "random(-50, 50)",
      duration: "random(10, 20)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.1
    });

    // Gradient pulse animation
    gsap.to(".gradient-pulse", {
      scale: 1.1,
      opacity: 0.5,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated Tech Background with GSAP */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Circuit-like grid pattern */}
        <div className="bg-grid absolute inset-0">
          <div className="absolute inset-0 bg-[size:40px_40px] bg-[linear-gradient(to_right,theme(colors.primary)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.primary)_1px,transparent_1px)] dark:opacity-[0.05]"></div>
        </div>
        
        {/* Animated particles */}
        <div ref={floatingParticlesRef} className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle absolute rounded-full bg-primary/10 dark:bg-primary/5"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        {/* Subtle pulsing gradient */}
        <div className="gradient-pulse absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary/5)_0%,transparent_70%)] opacity-40 dark:opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        {/* Theme toggle button with Framer Motion */}
        <motion.div 
          className="absolute top-4 right-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {/* Name with Framer Motion */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block mb-5 mt-9">Hi, I'm</span>
              <motion.span 
                className="text-8xl font-bold bg-gradient-to-r from-blue-800 via-yellow-400 via-purple-500 to-green-400 bg-[length:300%_300%] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Suraj Suthar
              </motion.span>
            </motion.h1>

            {/* Profession text with Framer Motion */}
            <motion.h2 
              className="text-xl md:text-2xl text-muted-foreground flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.span 
                key={textIndex}
                className="typing-animation"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {textOptions[textIndex]}
              </motion.span>
            </motion.h2>

            {/* Description with Framer Motion */}
            <motion.p 
              className="text-2xl leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Specializing in Linux, Docker, AWS, Kubernetes, Ansible, Jenkins and infrastructure automation with a passion for building resilient cloud solutions.
            </motion.p>

            {/* Buttons with Framer Motion */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button size="lg" className="text-lg hover:scale-105 transition-transform">
                View my work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg hover:scale-105 transition-transform"
              >
                Contact me
              </Button>
            </motion.div>
          </div>
          
          {/* Profile image with Framer Motion */}
          <div className="flex justify-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8,
                delay: 0.4,
                type: "spring",
                damping: 10,
                stiffness: 100
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mt-[70px] w-[280px] h-[280px] lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden border-4 shadow-[0_0_30px_5px_rgba(0, 255, 128, 0.6)] transition-shadow duration-500 hover:shadow-[0_0_40px_10px_rgba(0,255,255,0.7)] shadow-xl">
                <img 
                  src="/lovable-uploads/0b7f9cdb-6cf2-411e-b79f-18a838fb74d4.png" 
                  alt="Suraj Suthar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll down button with Framer Motion */}
        <motion.div 
          className="flex justify-center mt-16 md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            y: [0, -15, 0],
          }}
          transition={{ 
            delay: 1.2,
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut"
          }}
        >
          <a 
            href="#devops-tools"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;