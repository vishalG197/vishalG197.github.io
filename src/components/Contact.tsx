
import { Github, Linkedin, Mail, Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-12">
          <MessageSquare className="w-6 h-6 text-pink-500 animate-bounce" />
          <h2 className="section-title bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Contact Me
          </h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href="https://github.com/yourusername"
              id="contact-github"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-700 hover:text-pink-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Github className="w-6 h-6" />
              <span>GitHub Profile</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              id="contact-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-700 hover:text-pink-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href="tel:+1234567890"
              id="contact-phone"
              className="flex items-center space-x-3 text-gray-700 hover:text-pink-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Phone className="w-6 h-6" />
              <span>+1 234 567 890</span>
            </a>
            <a
              href="mailto:your.email@example.com"
              id="contact-email"
              className="flex items-center space-x-3 text-gray-700 hover:text-pink-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail className="w-6 h-6" />
              <span>your.email@example.com</span>
            </a>
          </div>
          
          <form className="mt-12">
            <h3 className="text-xl font-semibold mb-6">Send a Message:</h3>
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
