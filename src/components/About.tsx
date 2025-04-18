
import portfolioData from '../data/portfolioData.json';

const About = () => {
  const { description } = portfolioData.about;
  
  return (
    <section id="about" className="about section py-20 bg-gradient-to-br from-white via-pink-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto transform transition-all duration-500 hover:scale-[1.02]">
          {description.map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-700 mb-6">
              {paragraph}
            </p>
          ))}
          <div className="flex justify-center">
            <a
              href="/resume.pdf"
              target="_blank"
              id="resume-link-1"
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-md hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
