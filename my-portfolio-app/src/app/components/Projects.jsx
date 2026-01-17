'use client';

export default function Projects() {
  const projects = [
    {
      title: 'Hotel Booking App',
      description: 'A full-stack hotel booking application built with Next.js featuring user authentication, room management, booking system, and email notifications via Mailjet.',
      gradient: 'from-[#6366f1] to-[#8b5cf6]',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Mailjet'],
      github: 'https://github.com/bassem1144/Hotel-booking-Next.js',
      live: null,
      featured: true
    },
    {
      title: 'Laravel Webshop',
      description: 'E-commerce webshop application built with Laravel. Features product catalog, shopping cart, user authentication, and order management.',
      gradient: 'from-[#ef4444] to-[#dc2626]',
      tags: ['Laravel', 'PHP', 'MySQL', 'Blade'],
      github: 'https://github.com/bassem1144/Laravel-Webshop',
      live: null,
      featured: true
    },
    {
      title: 'Catering API',
      description: 'RESTful API for a catering service management system. Handles menus, orders, and customer data with secure endpoints.',
      gradient: 'from-[#22d3ee] to-[#06b6d4]',
      tags: ['PHP', 'REST API', 'MySQL'],
      github: 'https://github.com/bassem1144/Catering-api',
      live: null,
      featured: true
    },
    {
      title: 'Laravel Todo App',
      description: 'Task management application with CRUD operations, user authentication, and a clean UI for organizing daily tasks.',
      gradient: 'from-[#10b981] to-[#059669]',
      tags: ['Laravel', 'PHP', 'MySQL', 'Blade'],
      github: 'https://github.com/bassem1144/Laravel-todo-app',
      live: null,
      featured: false
    },
    {
      title: 'Django Project',
      description: 'Web application built with Django framework demonstrating Python backend development skills and Django ORM.',
      gradient: 'from-[#f472b6] to-[#ec4899]',
      tags: ['Python', 'Django', 'PostgreSQL'],
      github: 'https://github.com/bassem1144/django-opdracht',
      live: null,
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'This modern, responsive portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills.',
      gradient: 'from-[#fbbf24] to-[#f59e0b]',
      tags: ['Next.js', 'Tailwind CSS', 'React'],
      github: 'https://github.com/bassem1144',
      live: null,
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#0a0a0f] relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#6366f1] font-medium mb-2 block">My Work</span>
          <h2 className="section-title mx-auto">Featured Projects</h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of the projects I've built. Each project helped me grow 
            as a developer and learn new technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] flex items-center justify-center">
                  <span className="text-6xl opacity-50">🚀</span>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm rounded-full text-xs font-medium text-white">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2 py-1 bg-[rgba(255,255,255,0.05)] rounded-md text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>View Code</span>
                  </a>
                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/bassem1144" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <span>View More on GitHub</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
