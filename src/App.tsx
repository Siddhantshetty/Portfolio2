import React, { useEffect, useRef } from 'react';
import { Medal } from "lucide-react";
import { HelpingHand } from "lucide-react";
import { Star, Code, Briefcase, ChevronDown, Github, Linkedin, Mail, GraduationCap, Trophy, Users } from 'lucide-react';
function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-text').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-dark">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-dark/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary">SS.</h1>
            <div className="hidden md:flex space-x-12">
              <a href="#about" className="text-lg hover:text-primary transition-colors">About</a>
              <a href="#experience" className="text-lg hover:text-primary transition-colors">Experience</a>
              <a 
  href="https://drive.google.com/file/d/1BNoj2K8fai7dJlrIiyVzuM8HSyPCpnr6/view?usp=drive_link" 
  className="text-lg hover:text-primary transition-colors" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Resume
</a>

              <a href="#projects" className="text-lg hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-lg hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 hero-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl reveal-text">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-super-tight leading-tight">
              Siddhant<span className="gradient-text"> Shetty </span>.
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400 mb-12 tracking-tight max-w-3xl">
              Hi, I'm <b>Siddhant Shetty</b> a junior studying in the AI and Data Science department at Thadomal Shahani Engineering College. I have a strong interest in AI, ML, finance, and sports.
            </p>
            <div className="flex space-x-8">
              <a href="#projects" className="bg-primary hover:bg-primary/90 text-black px-12 py-4 rounded-full text-lg font-medium transition-colors">
                View Projects
              </a>
              <a href="#contact" className="border-2 border-primary text-primary hover:bg-primary/10 px-12 py-4 rounded-full text-lg font-medium transition-colors">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-12 h-12 text-primary" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 section-gradient">
        <div className="container mx-auto px-6">
          <div className="reveal-text">
            <h2 className="text-7xl font-bold mb-24 tracking-super-tight">About Me</h2>
            <div className="grid md:grid-cols-2 gap-16">
              <div className="card-gradient rounded-3xl p-12 hover-card">
                <GraduationCap className="w-16 h-16 text-primary mb-8" />
                <h3 className="text-3xl font-bold mb-6">Education</h3>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">Thadomal Shahani Engineering College</h4>
                  <p className="text-gray-400">B.E. Artificial Intelligence & Data Science</p>
                  <p className="text-gray-400">2022 - 2026</p>
                </div>
               
              </div>
              <div className="space-y-8">
                <div className="card-gradient rounded-3xl p-12 hover-card">
                  <Code className="w-16 h-16 text-primary mb-8" />
                  <h3 className="text-3xl font-bold mb-6">Tech Stack</h3>
                  <div className="grid grid-cols-2 gap-4 text-lg text-gray-400">
                    <div>• Java</div>
                    <div>• React</div>
                    <div>• Python</div>
                    <div>• Next.js</div>
                    <div>• SQL</div>
                    <div>• JavaScript</div>
                    <div>• Power BI</div>
                    <div>• Tailwind CSS</div>
                    <div>• Git</div>
                    <div>• Tableau</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-dark">
        <div className="container mx-auto px-6">
          <div className="reveal-text">
            <h2 className="text-7xl font-bold mb-24 tracking-super-tight">Experience</h2>
            <div className="space-y-12">
              <div className="card-gradient rounded-3xl p-12 hover-card">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">Web & App Development Intern</h3>
                    <p className="text-primary text-xl">Taurus Group</p>
                  </div>
                  <p className="text-gray-400">Dec 2024 – Feb 2025</p>
                </div>
                <ul className="space-y-4 text-lg text-gray-400">
                  <li>• Designed a bond trading portal integrating BSE/NSE APIs</li>
                  <li>• Developed frontend & backend architecture for seamless transactions</li>
                  <li>• <b>Overview:</b> Worked as a Web and App Development Intern at Taurus Group, focusing on defining and developing requirements for a
                    comprehensive bond buying and selling portal.</li>
                    <li>• <b>Architecture:</b> Designed the functional and technical specifications for a full-stack platform integrating BSE/NSE APIs to track live bond market
                    data. Ensured seamless connectivity for real-time bond pricing, order execution, and market analytics.</li>
                    <li>• <b>Implementation:</b> Outlined the frontend and backend requirements for a user-friendly interface where buyers and sellers could place bond
                    orders. Ensured the platform supported real-time verification of sufficient bank balance before transaction execution.</li>
                    <li>• <b>Integration:</b>Focused on secure API handling, compliance with financial regulations, and building a robust transaction processing system to
                    facilitate smooth and transparent bond trading.</li>
                </ul>
              </div>
              <div className="card-gradient rounded-3xl p-12 hover-card">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">Marketing Intern</h3>
                    <p className="text-primary text-xl">Canara Heat Treatment Industries</p>
                  </div>
                  <p className="text-gray-400">June 2024 - August 2024</p>
                </div>
                <ul className="space-y-4 text-lg text-gray-400">
                <li>• Enhanced online presence for Canara Heat Treatment</li>  
<li>• Designed and developed a responsive company website</li>  
<li>• Improved accessibility and customer engagement</li>  
<li>• Managed social media campaigns for digital outreach</li>  
<li>• Implemented strategies to boost brand visibility</li>  
<li>• Analyzed website traffic and engagement metrics</li>  

                

                </ul>
              </div>

              <div className="card-gradient rounded-3xl p-12 hover-card">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">Research Intern</h3>
                    <p className="text-primary text-xl">TSEC</p>
                  </div>
                  <p className="text-gray-400">Feb 2025 - Present</p>
                </div>
                <ul className="space-y-4 text-lg text-gray-400">
                <li>• Developing deep learning models for Alzheimer's detection</li>
<li>• Implementing CNNs with attention mechanisms</li>
<li>• Training models on MRI scans for stage classification</li>
<li>• Utilizing transfer learning to enhance feature extraction</li>
<li>• Validating performance using cross-validation and key metrics</li>
<li>• Applying Grad-CAM for explainable AI in medical imaging</li>
<li>• Exploring clinical deployment for decision support</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 section-gradient">
        <div className="container mx-auto px-6">
          <div className="reveal-text">
            <h2 className="text-7xl font-bold mb-24 tracking-super-tight">Projects</h2>
            <div className="grid md:grid-cols-2 gap-12">
            <div className="card-gradient rounded-3xl p-12 hover-card">
  <h3 className="text-3xl font-bold mb-6 flex items-center justify-between">
    SmartPredict
    <a 
      href="https://github.com/varunputta1511/anomalyprediction" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-primary hover:text-gray-300 transition"
    >
      <Github size={28} />
    </a>
  </h3>
  <p className="text-xl text-gray-400 mb-8">
    Industrial equipment monitoring system using ML for predictive maintenance
  </p>
  <div className="flex flex-wrap gap-4">
    <span className="px-6 py-2 bg-dark rounded-full text-primary">Python</span>
    <span className="px-6 py-2 bg-dark rounded-full text-primary">Machine Learning</span>
    <span className="px-6 py-2 bg-dark rounded-full text-primary">Streamlit</span>
    <span className="px-6 py-2 bg-dark rounded-full text-primary">Lstm</span>
  </div>
</div>

<div className="card-gradient rounded-3xl p-12 hover-card">
  <h3 className="text-3xl font-bold mb-6 flex items-center justify-between">
    Vocationally
    <a 
      href="htt" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-primary hover:text-gray-300 transition"
    >
      <Github size={28} />
    </a>
  </h3>
  <p className="text-xl text-gray-400 mb-8">
    Interactive learning platform with accessibility features for visually impaired
  </p>
  <div className="flex flex-wrap gap-4">
    <span className="px-6 py-2 bg-dark rounded-full text-primary">React</span>
    <span className="px-6 py-2 bg-dark rounded-full text-primary">Node.js</span>
    <span className="px-6 py-2 bg-dark rounded-full text-primary">MongoDB</span>
  </div>
</div>
<div className="card-gradient rounded-3xl p-12 hover-card">
  <h3 className="text-3xl font-bold mb-6 flex items-center justify-between">
    Personal Portfolio
    <a 
      href="https://github.com/Siddhantshetty/Portfolio" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-primary hover:text-gray-300 transition"
    >
      <Github size={28} />
    </a>
  </h3>
  <p className="text-xl text-gray-400 mb-8">
    A personal portfolio website showcasing projects, skills, and experiences.
  </p>
  <div className="flex flex-wrap gap-4">
    <span className="px-6 py-2 bg-dark rounded-full text-primary">React</span>
    <span className="px-6 py-2 bg-dark rounded-full text-primary">Tailwind CSS</span>
    <span className="px-6 py-2 bg-dark rounded-full text-primary">Framer Motion</span>
  </div>
</div>
<div className="card-gradient rounded-3xl p-12 hover-card">
  <h3 className="text-3xl font-bold mb-6 flex items-center justify-between">
    Banking App
    <a 
      href="https://github.com/Siddhantshetty/banking" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-primary hover:text-gray-300 transition"
    >
      <Github size={28} />
    </a>
  </h3>
  <p className="text-xl text-gray-400 mb-8">
    A fullstack banking website.
  </p>
  <div className="flex flex-wrap gap-4">
    <span className="px-6 py-2 bg-dark rounded-full text-primary">Next.js</span>
    <span className="px-6 py-2 bg-dark rounded-full text-primary">Appwrite</span>
    <span className="px-6 py-2 bg-dark rounded-full text-primary">Sentry</span>
  </div>
</div>

<div className="card-gradient rounded-3xl p-12 hover-card">
  <h3 className="text-3xl font-bold mb-6 flex items-center justify-between">
    Apple Clone Website
    <a 
      href="https://github.com/Siddhantshetty/AppleClone" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-primary hover:text-gray-300 transition"
    >
      <Github size={28} />
    </a>
  </h3>
  <p className="text-xl text-gray-400 mb-8">
    A fully responsive Apple website clone built with Next.js and Tailwind CSS.
  </p>
  <div className="flex flex-wrap gap-4">
    <span className="px-6 py-2 bg-dark rounded-full text-primary">Next.js</span>
    <span className="px-6 py-2 bg-dark rounded-full text-primary">Tailwind CSS</span>
    <span className="px-6 py-2 bg-dark rounded-full text-primary">Framer Motion</span>
  </div>
</div>

<div className="card-gradient rounded-3xl p-12 hover-card">
  <h3 className="text-3xl font-bold mb-6">
    Research Paper: Deep Learning for Alzheimer's Disease Detection
  </h3>
  <p className="text-xl text-gray-400 mb-8">
  Our model accurately detects and stages Alzheimer's, with potential for improved predictions using diverse data.
  </p>
  <div className="flex flex-wrap gap-4">
    <span className="px-6 py-2 bg-dark rounded-full text-primary">Deep Learning</span>
    <span className="px-6 py-2 bg-dark rounded-full text-primary">Medical Imaging</span>
    <span className="px-6 py-2 bg-dark rounded-full text-primary">Convolutional Neural Networks</span>
  </div>
</div>

            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-32 bg-dark">
        <div className="container mx-auto px-6">
          <div className="reveal-text">
            <h2 className="text-7xl font-bold mb-24 tracking-super-tight">Achievements</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="card-gradient rounded-3xl p-12 hover-card text-center">
                <Trophy className="w-16 h-16 text-primary mx-auto mb-8" />
                <h3 className="text-2xl font-bold mb-4">1st Place</h3>
                <p className="text-gray-400 text-lg">Virtual Stock Market Simulation (TWSJ)</p>
              </div>
              <div className="card-gradient rounded-3xl p-12 hover-card text-center">
  <Medal className="w-16 h-16 text-yellow-500 mx-auto mb-8" /> 
  <h3 className="text-2xl font-bold mb-4">Gold Medalist</h3>
  <p className="text-gray-400 text-lg">International English Olympiad</p>
</div>
              
<div className="card-gradient rounded-3xl p-12 hover-card text-center">
                <Trophy className="w-16 h-16 text-primary mx-auto mb-8" />
                <h3 className="text-2xl font-bold mb-4">2nd Place</h3>
                <p className="text-gray-400 text-lg">AI App Ideation Challenge</p>
              </div>
              
            
<div className="card-gradient rounded-3xl p-12 hover-card text-center">
                <Trophy className="w-16 h-16 text-primary mx-auto mb-8" />
                <h3 className="text-2xl font-bold mb-4">2nd Place</h3>
                <p className="text-gray-400 text-lg">AI Ideation Challenge</p>
              </div>  
              <div className="card-gradient rounded-3xl p-12 hover-card text-center">
                <Users className="w-16 h-16 text-primary mx-auto mb-8" />
                <h3 className="text-2xl font-bold mb-4">Sports Secretary</h3>
                <p className="text-gray-400 text-lg">TSEC Students' Council</p>
              </div>    
<div className="card-gradient rounded-3xl p-12 hover-card text-center">
  <HelpingHand className="w-16 h-16 text-primary mx-auto mb-8" />
  <h3 className="text-2xl font-bold mb-4">Best Volunteer</h3>
  <p className="text-gray-400 text-lg">RCTSEC</p>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 section-gradient">
        <div className="container mx-auto px-6">
          <div className="reveal-text text-center">
            <h2 className="text-7xl font-bold mb-12 tracking-super-tight">Let's Connect</h2>
            <p className="text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Ready to collaborate on something amazing? Let's make it happen.
            </p>
            <div className="flex justify-center space-x-12">
              <a href="https://github.com/SiddhantShetty" target="_blank" rel="noopener noreferrer" 
                className="hover:text-primary transition-all transform hover:scale-110">
                <Github className="w-12 h-12" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-primary transition-all transform hover:scale-110">
                <Linkedin className="w-12 h-12" />
              </a>
              <a href="mailto:siddhant.shetty1811@gmail.com" 
                className="hover:text-primary transition-all transform hover:scale-110">
                <Mail className="w-12 h-12" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Siddhant Shetty. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;