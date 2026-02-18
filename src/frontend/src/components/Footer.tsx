import { Heart } from 'lucide-react';
import { SiGithub, SiLinkedin, SiX, SiInstagram } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <SiGithub className="h-5 w-5" />, href: '#', label: 'GitHub' },
    { icon: <SiLinkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
    { icon: <SiX className="h-5 w-5" />, href: '#', label: 'X (Twitter)' },
    { icon: <SiInstagram className="h-5 w-5" />, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="p-3 rounded-full bg-muted hover:bg-accent-gradient-start/20 text-muted-foreground hover:text-accent-gradient-start transition-all duration-300 hover:scale-110"
                onClick={(e) => e.preventDefault()}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              © {currentYear}. Built with{' '}
              <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> using{' '}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-gradient-start hover:text-accent-gradient-end transition-colors font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
