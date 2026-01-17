'use client';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['PHP', 'Laravel', 'Java', 'Spring Boot', 'Python', 'MySQL']
    },
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['TypeScript', 'Vue.js', 'JavaScript', 'HTML', 'CSS', 'Next.js']
    },
    {
      title: 'Tools & Methods',
      icon: '🛠️',
      skills: ['Git', 'Scrum', 'REST APIs', 'Laravel Nova', 'VS Code']
    },
    {
      title: 'Soft Skills',
      icon: '🤝',
      skills: ['Team Collaboration', 'Code Reviews', 'Agile/Scrum', 'Problem Solving']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#0d0d12] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[rgba(99,102,241,0.05)] rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[rgba(34,211,238,0.05)] rounded-full filter blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#6366f1] font-medium mb-2 block">My Expertise</span>
          <h2 className="section-title mx-auto">Skills & Technologies</h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to build full-stack web applications. 
            Experienced in working within Scrum teams with sprints, stand-ups, and code reviews.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <div className="glass-card p-6">
            <div className="flex items-center gap-4 justify-center mb-4">
              <span className="text-2xl">🌍</span>
              <h3 className="text-lg font-semibold">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="skill-tag">Dutch (Native)</span>
              <span className="skill-tag">English (Professional)</span>
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center gap-4 justify-center mb-4">
              <span className="text-2xl">📖</span>
              <h3 className="text-lg font-semibold">Currently Learning</h3>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="skill-tag border-[#f472b6]">React</span>
              <span className="skill-tag border-[#f472b6]">Docker</span>
              <span className="skill-tag border-[#f472b6]">AWS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
