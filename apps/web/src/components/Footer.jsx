
import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold">Saizor</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Audit First. Build Smart.
            </p>
            <p className="text-sm text-secondary-foreground/80 mt-2">
              Perth, Western Australia
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span className="text-sm font-semibold mb-3 block">Navigation</span>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                Home
              </Link>
              <Link to="/audit" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                AI Audit
              </Link>
              <Link to="/services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                Services
              </Link>
              <Link to="/about" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                About
              </Link>
              <Link to="/contact" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="text-sm font-semibold mb-3 block">Contact</span>
            <div className="flex flex-col gap-2">
              <a href="tel:+61484311234" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +61 (0) 484 311 234
              </a>
              <a href="mailto:omer.bashir@saizor.com" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                omer.bashir@saizor.com
              </a>
              <div className="text-sm text-secondary-foreground/80 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Perth, Western Australia
              </div>
            </div>
          </div>

          {/* Legal & Social */}
          <div>
            <span className="text-sm font-semibold mb-3 block">Legal</span>
            <div className="flex flex-col gap-2 mb-4">
              <Link to="/privacy" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
              <span>Follow us</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-secondary-foreground/60 text-center">
            © {new Date().getFullYear()} Saizor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
