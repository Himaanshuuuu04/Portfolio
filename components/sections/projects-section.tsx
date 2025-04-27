"use client"

import { forwardRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink, ArrowRight } from "lucide-react"

export const ProjectsSection = forwardRef<HTMLElement>((_, ref) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  // Project data
  const projects = [
    {
      title: "CodeInsight AI",
      description: "AI-powered code analysis platform with debugging insights.",
      features: [
        "Code review system using Gemini API for technical insights.",
        "Error analysis tool with Stack Overflow integration.",
        "Blog module using Dev.to API with 20+ popular articles.",
      ],
      techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js"],
      github: "https://github.com/username/codeinsight-ai",
      liveSite: "https://codeinsight-ai.vercel.app",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "DevNet",
      description: "Social network platform for developers to connect and share projects.",
      features: [
        "Real-time messaging with Socket.io.",
        "Project showcase with GitHub integration.",
        "Job board with filtering and application tracking.",
      ],
      techStack: ["Next.js", "MongoDB", "Express.js", "Socket.io"],
      github: "https://github.com/username/devnet",
      liveSite: "https://devnet-app.vercel.app",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "HealthTrack",
      description: "Comprehensive health monitoring and wellness application.",
      features: [
        "Personalized workout plans with progress tracking.",
        "Nutrition analysis and meal planning.",
        "Integration with wearable devices for real-time data.",
      ],
      techStack: ["React Native", "Firebase", "Node.js", "TensorFlow"],
      github: "https://github.com/username/healthtrack",
      liveSite: "https://healthtrack-app.vercel.app",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section ref={ref} id="projects" className="relative min-h-screen w-full py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-400 uppercase tracking-wider mb-2">EXPLORE MY CREATIONS</p>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
            Projects
          </h2>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                className={`relative z-10 ${expandedIndex === index ? "z-30" : ""}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCardClick(index)}
                layoutId={`project-card-${index}`}
                initial={false}
              >
                <motion.div
                  className={`
                    bg-black border border-gray-800 rounded-2xl overflow-hidden cursor-pointer
                    transition-all duration-500 transform
                    ${hoveredIndex === index ? "scale-[1.02] shadow-2xl shadow-pink-500/20" : "scale-100"}
                  `}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                  animate={{
                    rotateY: hoveredIndex === index ? 5 : 0,
                    rotateX: hoveredIndex === index ? -5 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Project Info */}
                    <div className="p-8 lg:p-10">
                      <motion.h3
                        className="text-3xl font-bold text-white mb-4"
                        animate={{
                          color: hoveredIndex === index ? "#ec4899" : "#ffffff",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-gray-300 mb-6">{project.description}</p>

                      <div className="space-y-2 mb-6">
                        {project.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start"
                            initial={{ x: 0 }}
                            animate={{
                              x: hoveredIndex === index ? 5 : 0,
                              opacity: hoveredIndex === index ? 1 : 0.8,
                            }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                          >
                            <span className="text-pink-500 mr-2">-</span>
                            <span className="text-gray-300">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "#3f3f46",
                              borderColor: "#ec4899",
                            }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              transition: { delay: 0.2 + i * 0.1 },
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white border border-gray-700 hover:bg-gray-800 transition-colors"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "#18181b",
                            borderColor: "#ec4899",
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="h-4 w-4" />
                          <span>GitHub</span>
                        </motion.a>
                        <motion.a
                          href={project.liveSite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white border border-gray-700 hover:bg-gray-800 transition-colors"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "#18181b",
                            borderColor: "#ec4899",
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Live Site</span>
                        </motion.a>
                      </div>
                    </div>

                    {/* Project Image */}
                    <div className="relative h-64 lg:h-auto overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-red-500/20 opacity-0 z-10"
                        animate={{
                          opacity: hoveredIndex === index ? 0.5 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        animate={{
                          scale: hoveredIndex === index ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.5 }}
                        className="h-full w-full"
                      >
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 flex items-center gap-2 text-pink-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-sm">View details</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-r from-pink-500/10 to-red-500/5 blur-3xl"
                animate={{
                  scale: hoveredIndex === index ? 1.2 : 1,
                  opacity: hoveredIndex === index ? 0.8 : 0.3,
                }}
                transition={{ duration: 0.8 }}
              />
              <motion.div
                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-r from-red-500/10 to-pink-500/5 blur-3xl"
                animate={{
                  scale: hoveredIndex === index ? 1.2 : 1,
                  opacity: hoveredIndex === index ? 0.8 : 0.3,
                }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})

ProjectsSection.displayName = "ProjectsSection"
