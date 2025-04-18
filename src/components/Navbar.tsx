import { Home, User, Code, FolderGit2, Phone, FileText } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav id="nav-menu" className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} 
              className="nav-link home hover:text-pink-500 transition-colors flex items-center gap-2 group">
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Home</span>
            </a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} 
              className="nav-link about hover:text-pink-500 transition-colors flex items-center gap-2 group">
              <User className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>About</span>
            </a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} 
              className="nav-link skills hover:text-pink-500 transition-colors flex items-center gap-2 group">
              <Code className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Skills</span>
            </a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} 
              className="nav-link projects hover:text-pink-500 transition-colors flex items-center gap-2 group">
              <FolderGit2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Projects</span>
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
              className="nav-link contact hover:text-pink-500 transition-colors flex items-center gap-2 group">
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Contact</span>
            </a>
            <a href="/resume.pdf" target="_blank" 
              className="nav-link resume bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition-colors flex items-center gap-2 group">
              <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
