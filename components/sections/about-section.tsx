"use client"
import { forwardRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin } from "lucide-react"

export const AboutSection = forwardRef<HTMLElement>((_, ref) => {
  // Education data
  const education = [
    {
      institution: "Banaras Hindu University",
      degree: "Master of Computer Applications",
      period: "2022 - 2024",
      grade: "CGPA: 8.1",
    },
  ]

  // Experience data
  const experience = [
    {
      company: "Clinical AI Assistance",
      role: "Front-End Developer Intern",
      period: "Apr 2024 - Oct 2024",
      location: "Remote",
      achievements: [
        "Improved website performance, increasing mobile traffic by 10%",
        "Developed a mental health tracking platform, adopted by 700+ students",
        "Fixed UI bugs, reducing complaints by 50%",
      ],
    },
  ]

  // Tech stack data
  const techStack = [
    { name: "HTML", icon: "html5", category: "frontend" },
    { name: "CSS", icon: "css3", category: "frontend" },
    { name: "JavaScript", icon: "javascript", category: "frontend" },
    { name: "TypeScript", icon: "typescript", category: "frontend" },
    { name: "React.JS", icon: "react", category: "frontend" },
    { name: "Next.JS", icon: "nextjs", category: "frontend" },
    { name: "Tailwind CSS", icon: "tailwindcss", category: "frontend" },
    { name: "Framer Motion", icon: "framer", category: "frontend" },
    { name: "Node.JS", icon: "nodejs", category: "backend" },
    { name: "Express.JS", icon: "express", category: "backend" },
    { name: "MongoDB", icon: "mongodb", category: "backend" },
    { name: "Redux Toolkit", icon: "redux", category: "frontend" },
    { name: "Git", icon: "git", category: "tools" },
    { name: "GitHub", icon: "github", category: "tools" },
    { name: "Vercel", icon: "vercel", category: "tools" },
    { name: "Postman", icon: "postman", category: "tools" },
    { name: "C++", icon: "cplusplus", category: "languages" },
    { name: "Figma", icon: "figma", category: "design" },
  ]

  // Function to get icon component based on name
  const getIconClass = (icon: string) => {
    switch (icon) {
      case "html5":
        return "bg-orange-600"
      case "css3":
        return "bg-blue-500"
      case "javascript":
        return "bg-yellow-400"
      case "typescript":
        return "bg-blue-600"
      case "react":
        return "bg-cyan-400"
      case "nextjs":
        return "bg-black border border-white"
      case "tailwindcss":
        return "bg-cyan-500"
      case "framer":
        return "bg-purple-600"
      case "nodejs":
        return "bg-green-600"
      case "express":
        return "bg-gray-800 border border-gray-600"
      case "mongodb":
        return "bg-green-500"
      case "redux":
        return "bg-purple-700"
      case "git":
        return "bg-red-500"
      case "github":
        return "bg-gray-800"
      case "vercel":
        return "bg-black border border-white"
      case "postman":
        return "bg-orange-500"
      case "cplusplus":
        return "bg-blue-700"
      case "figma":
        return "bg-pink-600"
      default:
        return "bg-gray-700"
    }
  }

  return (
    <section ref={ref} id="about" className="relative min-h-screen w-full py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-400 uppercase tracking-wider mb-2">GET TO KNOW ME</p>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left column with image and bio */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72 mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-red-500 blur-xl opacity-20"></div>
              <div className="relative w-full h-full rounded-full border-2 border-gray-800 overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=400" alt="Profile" fill className="object-cover" />
              </div>
            </div>

            <div className="text-center max-w-md">
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate Full-Stack Developer who loves building dynamic, user-friendly applications. I thrive
                on solving problems, creating seamless experiences, and continuously expanding my skills. Always eager
                to learn and grow, I'm currently looking for new opportunities to contribute and innovate.
              </p>

              <div className="flex items-center justify-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Jalandhar, Punjab, India</span>
              </div>
            </div>
          </div>

          {/* Right column with education, experience, and tech stack */}
          <div className="lg:col-span-8 space-y-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
              {education.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-semibold text-white">{item.institution}</h4>
                    <span className="text-gray-400">{item.period}</span>
                  </div>
                  <p className="text-gray-300">{item.degree}</p>
                  <p className="text-gray-400">{item.grade}</p>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
              {experience.map((item, index) => (
                <div key={index} className="mb-8">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-semibold text-white">{item.company}</h4>
                    <div className="text-right">
                      <span className="text-gray-400">{item.period}</span>
                      <p className="text-gray-400">{item.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{item.role}</p>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-pink-500 mr-2">|</span>
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className={`px-4 py-2 rounded-full ${getIconClass(tech.icon)} flex items-center gap-2`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-white">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

AboutSection.displayName = "AboutSection"
