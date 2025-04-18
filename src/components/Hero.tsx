
import portfolioData from '../data/portfolioData.json';

const Hero = () => {
  const { name, title, description } = portfolioData.personal;
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-pink-100">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between animate-fade-in">
        <div className="flex-1 text-left transform transition-all duration-700 hover:scale-105">
          <h1 id="user-detail-name" className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Hello, I'm <span>{name}</span>
          </h1>
          <p id="user-detail-intro" className="text-xl text-gray-600 mb-8">
            {description}
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            id="resume-link-2"
            className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-md hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            Download Resume
          </a>
        </div>
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <img
            src="/placeholder.svg"
            alt="Professional headshot"
            className="home-img w-64 h-64 rounded-full object-cover shadow-xl transform transition-all duration-700 hover:scale-105 hover:shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
