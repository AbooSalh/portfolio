import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by Ahmed Saleh</span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/AbooSalh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-2 text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
