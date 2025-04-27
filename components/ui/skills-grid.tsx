"use client"

import { motion } from "framer-motion"

export function SkillsGrid() {
  const skills = [
    { name: "React", icon: "⚛️", color: "bg-blue-500" },
    { name: "Next.js", icon: "▲", color: "bg-black" },
    { name: "TypeScript", icon: "TS", color: "bg-blue-600" },
    { name: "Node.js", icon: "🟢", color: "bg-green-600" },
    { name: "MongoDB", icon: "🍃", color: "bg-green-500" }, 
    { name: "GraphQL", icon: "◆", color: "bg-pink-600" },
    { name: "Tailwind", icon: "🌊", color: "bg-cyan-500" },
    { name: "Redux", icon: "🔄", color: "bg-purple-600" },
    { name: "Firebase", icon: "🔥", color: "bg-yellow-500" },
    { name: "Docker", icon: "🐳", color: "bg-blue-500" },
    { name: "AWS", icon: "☁️", color: "bg-yellow-600" },
    { name: "Git", icon: "📊", color: "bg-red-500" },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="flex flex-col items-center p-4 rounded-lg bg-gray-800 border border-gray-700 hover:border-green-500/50 transition-all"
        >
          <div
            className={`w-10 h-10 ${skill.color} rounded-full flex items-center justify-center text-white text-lg font-bold mb-2`}
          >
            {skill.icon}
          </div>
          <span className="text-white">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  )
}
