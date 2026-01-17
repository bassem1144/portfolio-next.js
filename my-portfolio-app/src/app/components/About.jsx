'use client';

export default function About() {
  const highlights = [
    { icon: '🎓', label: 'Education', value: 'HvA' },
    { icon: '💼', label: 'Internships', value: '2' },
    { icon: '📚', label: 'Technologies', value: '15+' },
    { icon: '🏆', label: 'Years Coding', value: '3+' },
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0f] relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#6366f1] via-[#22d3ee] to-[#f472b6] p-1">
                <div className="w-full h-full rounded-2xl bg-[#0a0a0f] flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[rgba(99,102,241,0.2)] to-[rgba(34,211,238,0.1)] flex items-center justify-center">
                    <span className="text-8xl">👨‍💻</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#6366f1] rounded-xl opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#22d3ee] rounded-xl opacity-50"></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-[rgba(244,114,182,0.2)] rounded-full blur-xl"></div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-[#6366f1] font-medium mb-2 block">Get to know me</span>
              <h2 className="section-title">About Me</h2>
            </div>

            <p className="text-gray-400 leading-relaxed text-lg">
              I'm <strong className="text-white">Bassem Ismail</strong>, a Software Engineering student 
              at Amsterdam University of Applied Sciences (Hogeschool van Amsterdam), 
              passionate about becoming a Full-Stack Developer and building engaging, 
              interactive web applications.
            </p>

            <p className="text-gray-400 leading-relaxed">
              During my first year at HvA, I gained extensive experience with 
              <span className="text-[#22d3ee]"> TypeScript</span>. After completing my propedeuse, 
              I've been developing with <span className="text-[#6366f1]">Java and Spring Boot</span> for 
              backend applications and <span className="text-[#f472b6]">Vue.js</span> for dynamic frontends. 
              I build full-stack web applications with API integrations and database connections.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Before HvA, I completed a Software Developer program at Bit Academy where I 
              developed a strong foundation in <span className="text-[#6366f1]">PHP</span> and 
              <span className="text-[#22d3ee]"> Laravel</span>. I work effectively in Scrum teams 
              with sprints, stand-ups, and code reviews.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              {highlights.map((item, index) => (
                <div key={index} className="glass-card p-4 text-center">
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <span className="text-xl font-bold gradient-text">{item.value}</span>
                  <span className="text-sm text-gray-500 block">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Download Resume Button */}
            <div className="mt-4">
              <a 
                href="#contact" 
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
