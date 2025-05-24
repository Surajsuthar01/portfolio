
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="py-5 fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-3xl sm:text-5xl font-bold text-gradient">
            Suraj Suthar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center ml-9 space-x-8">
            <div className="flex space-x-6">
              <a href="#about" className="text-lg font-medium hover:text-primary transition-colors">
                About
              </a>
              <a href="#skills" className="text-lg font-medium hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#certifications" className="text-lg font-medium hover:text-primary transition-colors">
                Certifications
              </a>
              <a href="#achievements" className="text-lg font-medium hover:text-primary transition-colors">
                Achievements
              </a>
              <a href="#education" className="text-lg font-medium hover:text-primary transition-colors">
                Education
              </a>
            </div>
            
            <div className="flex items-center gap-5 space-x-3">
              <a href="https://github.com/Surajsuthar01/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 hover:text-primary transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/suraj-suthar-7a088a28b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
              </a>
              <a href="mailto:surajsuthar0654@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5 hover:text-primary transition-colors" />
              </a>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="ml-2"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
            
            <Button size="sm" asChild>
              <a href="/resume.pdf" download>Download CV</a>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <button 
              className="text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-background pt-20 px-6 pb-10 z-40 animate-fade-in">
            <div className="flex flex-col space-y-6">
              <a 
                href="#about" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a 
                href="#skills" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#certifications" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Certifications
              </a>
              <a 
                href="#achievements" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Achievements
              </a>
              <a 
                href="#education" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Education
              </a>
              
              <div className="flex items-center space-x-5 pt-6">
                <a href="https://github.com/Surajsuthar01/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-6 w-6 hover:text-primary transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/suraj-suthar-7a088a28b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
                </a>
                <a href="mailto:surajsuthar0654@gmail.com" aria-label="Email">
                  <Mail className="h-6 w-6 hover:text-primary transition-colors" />
                </a>
              </div>
              
              <Button className="mt-6" asChild>
                <a href="/resume.pdf" download>Download CV</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
