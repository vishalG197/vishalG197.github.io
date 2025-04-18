
const projectsData = [
  {
    title: "E-commerce Platform",
    image: "/project1.jpg",
    description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    techStack: "MongoDB, Express.js, React, Node.js, Redux",
    github: "https://github.com/username/ecommerce",
    live: "https://ecommerce-demo.com"
  },
  {
    title: "Task Management App",
    image: "/project2.jpg",
    description: "Real-time task management application with collaborative features and drag-and-drop functionality.",
    techStack: "MERN Stack, Socket.io, Material-UI",
    github: "https://github.com/username/task-manager",
    live: "https://task-manager-demo.com"
  },
  {
    title: "Blog Platform",
    image: "/project3.jpg",
    description: "Feature-rich blogging platform with markdown support and user interactions.",
    techStack: "React, Node.js, MongoDB, Express",
    github: "https://github.com/username/blog-platform",
    live: "https://blog-platform-demo.com"
  },
  {
    title: "Social Media Dashboard",
    image: "/project4.jpg",
    description: "Analytics dashboard for social media metrics with real-time data visualization.",
    techStack: "MERN Stack, Chart.js, WebSocket",
    github: "https://github.com/username/social-dashboard",
    live: "https://social-dashboard-demo.com"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="project-title text-xl font-bold mb-2">{project.title}</h3>
                <p className="project-description text-gray-600 mb-4">{project.description}</p>
                <p className="project-tech-stack text-sm text-gray-500 mb-4">{project.techStack}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-link text-pink-500 hover:text-pink-600"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-deployed-link text-pink-500 hover:text-pink-600"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
