"use client"

import { forwardRef, useState } from "react"
import { motion } from "framer-motion"

import { TextReveal } from "@/components/ui/text-reveal"
import { ProjectCard } from "@/components/ui/project-card"

export const ProjectsSection = forwardRef<HTMLElement>((_, ref) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Project data
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
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with Next.js and Framer Motion",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      link: "https://github.com/username/portfolio",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Task Management App",
      description: "A task management application with drag-and-drop functionality",
      tags: ["React", "Redux", "Firebase", "Material UI"],
      link: "https://github.com/username/task-app",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data",
      tags: ["JavaScript", "Weather API", "Chart.js", "CSS"],
      link: "https://github.com/username/weather-app",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <section ref={ref} id="projects" className="relative min-h-screen w-full py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <TextReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">My Projects</h2>
        </TextReveal>

        <div className="relative h-[800px] md:h-[500px] w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="absolute w-full md:w-[350px] h-[250px]"
              initial={{
                x: 0,
                y: index * 20,
                scale: 1 - index * 0.05,
                opacity: 1 - index * 0.15,
                zIndex: projects.length - index,
              }}
              animate={{
                x: hoveredIndex === index ? [-10, 0, 10, 0, -10, 0][index % 6] : 0,
                y:
                  hoveredIndex === null
                    ? index * 20
                    : hoveredIndex === index
                      ? -20
                      : hoveredIndex < index
                        ? index * 30 + 20
                        : index * 10,
                scale: hoveredIndex === index ? 1.05 : 1 - index * 0.05,
                opacity: hoveredIndex === null ? 1 - index * 0.15 : hoveredIndex === index ? 1 : 0.5,
                zIndex: hoveredIndex === index ? 10 : projects.length - index,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                opacity: { duration: 0.2 },
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              style={{
                left: `${(index % 3) * 5 + 50 - (index % 3) * 25}%`,
                top: `${Math.floor(index / 3) * 260}px`,
                transformOrigin: "center center",
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
                image={project.image}
                isHovered={hoveredIndex === index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})

ProjectsSection.displayName = "ProjectsSection"
