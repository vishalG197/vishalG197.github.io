
import { Sparkles } from "lucide-react";

const skillsData = [
  { name: "MongoDB", image: "/mongodb.svg" },
  { name: "Express.js", image: "/express.svg" },
  { name: "React", image: "/react.svg" },
  { name: "Node.js", image: "/nodejs.svg" },
  { name: "JavaScript", image: "/javascript.svg" },
  { name: "HTML", image: "/html.svg" },
  { name: "CSS", image: "/css.svg" },
  { name: "Git", image: "/git.svg" }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-pink-50 via-white to-pink-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-12">
          <Sparkles className="w-6 h-6 text-pink-500 animate-pulse" />
          <h2 className="section-title bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Skills
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className="skills-card bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ 
                animation: `fadeIn 0.5s ease-out forwards ${index * 0.1}s`,
                opacity: 0 
              }}
            >
              <img 
                src={skill.image} 
                alt={skill.name} 
                className="skills-card-img w-16 h-16 mx-auto mb-4 animate-bounce hover:animate-none"
              />
              <h3 className="skills-card-name text-center font-medium text-gray-700">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
