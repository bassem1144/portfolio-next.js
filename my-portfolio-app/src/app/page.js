import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const metadata = {
  title: 'Portfolio | Software Engineering Student',
  description: 'Welcome to my portfolio. I am a passionate Software Engineering student showcasing my projects and skills.',
  keywords: ['portfolio', 'software engineering', 'developer', 'student', 'projects'],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
