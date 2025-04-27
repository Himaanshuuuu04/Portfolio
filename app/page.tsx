"use client";
import { House, SquareUserRound, SquareCode, Mail,ArrowDown  } from "lucide-react";
import type React from "react"
import { useRef } from "react"
import { motion } from "framer-motion"
import { FloatingNav } from "@/components/ui/floating-navbar"
import SparklesPreview from "@/components/demo/sparklePreviewDemo"
import Squares from "@/components/ui/Squares/Squares"
import AnimatedButton from "@/components/ui/AnimatedButton"
import { ProjectCard } from "@/components/ui/project-card"
import { Timeline } from "@/components/ui/timeline"
import { ContactForm } from "@/components/ui/contact-form"
import { AnimatedBox } from "@/components/ui/animated-box"
import { TextReveal } from "@/components/ui/text-reveal"
import { SkillsGrid } from "@/components/ui/skills-grid"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { TracingBeam } from "@/components/ui/tracing-beam"
export default function Home() {
  
  const homeRef = useRef<HTMLDivElement | null>(null)
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const projectsRef = useRef<HTMLDivElement | null>(null)
  const contactRef = useRef<HTMLDivElement | null>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" })
      }
    }
    const navItems = [
      {
        name: "Home",
        link: "/",
        icon: <House className="h-5 w-5 text-neutral-500 dark:text-white" />,
        onClick: () => scrollToSection(homeRef),
      },
      {
        name: "About",
        link: "/about",
        icon: (
          <SquareUserRound className="h-5 w-5 text-neutral-500 dark:text-white" />
        ),
        onClick: () => scrollToSection(aboutRef),
      },
    
      {
        name: "Projects",
        link: "/projects",
        icon: <SquareCode className="h-5 w-5 text-neutral-500 dark:text-white" />,
        onClick: () => scrollToSection(projectsRef),
      },
      {
        name: "Contact",
        link: "/contact",
        icon: <Mail className="h-5 w-5 text-neutral-500 dark:text-white" />,
        onClick: () => scrollToSection(contactRef),
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/himaansh-uu/",
        icon: <i className="pi pi-linkedin  " style={{ fontSize: "1rem" }}></i>,
        external: true,
      },
      {
        name: "GitHub",
        link: "https://github.com/Himaanshuuuu04",
        icon: <i className="pi pi-github" style={{ fontSize: "1rem" }}></i>,
        external:true,
      },
    ];

    const projects = [
      {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform with React, Node.js, and MongoDB",
        tags: ["React", "Node.js", "MongoDB", "Express"],
        link: "https://github.com/username/ecommerce",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "AI Content Generator",
        description: "An AI-powered content generation tool using OpenAI's GPT-4",
        tags: ["Next.js", "OpenAI", "Tailwind CSS", "TypeScript"],
        link: "https://github.com/username/ai-content",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Real-time Chat Application",
        description: "A real-time chat application with WebSockets and React",
        tags: ["React", "Socket.io", "Express", "MongoDB"],
        link: "https://github.com/username/chat-app",
        image: "/placeholder.svg?height=600&width=800",
      },
    ]
  
    // Timeline data
    const timelineItems = [
      {
        title: "Software Engineer",
        company: "Tech Innovations Inc.",
        date: "2022 - Present",
        description: "Leading development of web applications using React and Node.js",
      },
      {
        title: "Frontend Developer",
        company: "Digital Solutions",
        date: "2020 - 2022",
        description: "Developed responsive web interfaces and improved UX/UI",
      },
      {
        title: "Web Development Intern",
        company: "StartUp Hub",
        date: "2019 - 2020",
        description: "Assisted in building web applications and learned industry best practices",
      },
    ]
    
  return (
    <div className="flex flex-col bg-black min-h-screen w-full overflow-x-hidden font-[family-name:var(--font-geist-sans)]">
    {/* Floating Navigation */}
    <FloatingNav navItems={navItems} />

    {/* Home Section */}
    <section
      ref={homeRef}
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen w-full p-8 pb-20 gap-10"
    >
      <div className="absolute inset-0 w-full h-full bg-black">
        <Squares
          speed={0.4}
          squareSize={40}
          direction="diagonal"
          borderColor="rgb(41,41,41)"
          hoverFillColor="#444444"
        />
      </div>

      <main className="flex flex-col gap-[32px] items-center z-10">
        <div className="flex flex-col gap-2 items-center justify-center mt-20 md:mt-50">
          <SparklesPreview>
            <p className="text-base text-wrap w-screen px-5 md:w-full sm:text-lg font-light text-center text-neutral-500 dark:text-white">
              Hey, I&apos;m a<strong className="text-green-400 font-bold"> Full Stack Developer</strong> passionate
              about building performant, user-friendly, and scalable applications.
            </p>
          </SparklesPreview>

          <div className="flex flex-col md:flex-row gap-2 items-center justify-center -mt-4">
            <AnimatedButton>
              <a href="#contact" onClick={() => scrollToSection(contactRef)}>
                Let&apos;s Connect ✋
              </a>
            </AnimatedButton>
            <AnimatedButton>
              <a
                href="https://drive.google.com/file/d/1q2r3s4t5u6v7w8x9y0z1a2b3c4d5e6f/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume 📄
              </a>
            </AnimatedButton>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection(aboutRef)}
        >
          <ArrowDown className="h-8 w-8 text-green-400 animate-bounce" />
        </motion.div>
      </main>
    </section>

    {/* About Section */}
    <section
      ref={aboutRef}
      id="about"
      className="relative min-h-screen w-full py-20 px-4 md:px-10 bg-gradient-to-b from-black to-gray-900"
    >
      <TracingBeam>
        <div className="max-w-6xl mx-auto">
          <TextReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white">About Me</h2>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <AnimatedBox>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate Full Stack Developer with expertise in modern web technologies. With a strong
                  foundation in both frontend and backend development, I create seamless, responsive, and
                  user-friendly applications.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                  My journey in tech began with a curiosity about how things work on the web, which evolved into a
                  career building innovative solutions for real-world problems.
                </p>
              </AnimatedBox>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4 text-green-400">Experience</h3>
                <Timeline items={timelineItems} />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-green-400">Skills</h3>
              <SkillsGrid />
            </div>
          </div>
        </div>
      </TracingBeam>
    </section>

    {/* Projects Section */}
    <section ref={projectsRef} id="projects" className="relative min-h-screen w-full py-20 px-4 md:px-10 bg-black">
      <div className="max-w-6xl mx-auto">
        <TextReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white">My Projects</h2>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              image={project.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section
      ref={contactRef}
      id="contact"
      className="relative min-h-screen w-full py-20 px-4 md:px-10 bg-gradient-to-b from-gray-900 to-black"
    >
      <BackgroundBeams />
      <div className="max-w-4xl mx-auto relative z-10">
        <TextReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white">Get In Touch</h2>
        </TextReveal>

        <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
          <ContactForm />
        </div>

        <div className="mt-16 flex justify-center space-x-8">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-green-400 transition-colors"
          >
            {/* <Github className="h-6 w-6" /> */}
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-green-400 transition-colors"
          >
            {/* <Linkedin className="h-6 w-6" /> */}
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-2 text-white hover:text-green-400 transition-colors"
          >
            <Mail className="h-6 w-6" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  </div>
  );
}
