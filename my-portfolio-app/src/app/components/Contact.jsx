'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0d0d12] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgba(99,102,241,0.05)] rounded-full filter blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#6366f1] font-medium mb-2 block">Get In Touch</span>
          <h2 className="section-title mx-auto">Let's Work Together</h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I'm currently looking for internship and job opportunities. Whether you have a 
            question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[rgba(99,102,241,0.1)] flex items-center justify-center text-[#6366f1]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Email</span>
                    <a href="mailto:bassemismail79@gmail.com" className="block text-white hover:text-[#6366f1] transition-colors">bassemismail79@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[rgba(99,102,241,0.1)] flex items-center justify-center text-[#6366f1]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Location</span>
                    <span className="block text-white">Amsterdam, Netherlands</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
              <div className="flex gap-4">
                <a href="https://github.com/bassem1144" target="_blank" rel="noopener noreferrer" className="social-icon glow">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/bassem-ismail-767563237/" target="_blank" rel="noopener noreferrer" className="social-icon glow">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Experience & Education */}
          <div className="flex flex-col gap-6">
            {/* Experience */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-6">Work Experience</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-[#6366f1] pl-4">
                  <h4 className="font-medium text-white">Backend Developer Intern</h4>
                  <p className="text-sm text-[#6366f1]">Norday • Feb 2024 - Jul 2024</p>
                  <ul className="text-sm text-gray-400 mt-2 space-y-1">
                    <li>• Developed and maintained Laravel applications</li>
                    <li>• Worked in multidisciplinary teams on large projects</li>
                    <li>• Used Laravel Nova CMS for content management</li>
                  </ul>
                </div>
                <div className="border-l-2 border-[#22d3ee] pl-4">
                  <h4 className="font-medium text-white">Laravel Developer Intern</h4>
                  <p className="text-sm text-[#22d3ee]">OKcomply • Mar 2023 - Jul 2023</p>
                  <ul className="text-sm text-gray-400 mt-2 space-y-1">
                    <li>• Developed new web applications with Laravel</li>
                    <li>• Designed and set up databases with table relations</li>
                    <li>• Learned and applied new Laravel techniques</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-6">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-[#f472b6] pl-4">
                  <h4 className="font-medium text-white">HBO-ICT Software Engineering</h4>
                  <p className="text-sm text-[#f472b6]">Hogeschool van Amsterdam • Sep 2024 - Present</p>
                  <p className="text-sm text-gray-400 mt-1">TypeScript, Java, Spring Boot, Vue.js, Scrum</p>
                </div>
                <div className="border-l-2 border-[#fbbf24] pl-4">
                  <h4 className="font-medium text-white">Software Developer (MBO 4)</h4>
                  <p className="text-sm text-[#fbbf24]">Bit Academy • Aug 2021 - Jul 2024</p>
                  <p className="text-sm text-gray-400 mt-1">PHP, Laravel, Python, JavaScript, HTML/CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
