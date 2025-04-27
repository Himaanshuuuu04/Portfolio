"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

export function ProjectCard({
  title,
  description,
  tags,
  link,
  image,
  index,
}: {
  title: string
  description: string
  tags: string[]
  link: string
  image: string
  index: number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-green-500/50 transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="h-60 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-80" />
      </div>

      <div className="relative p-6">
        <motion.div initial={{ y: 0 }} animate={{ y: hovered ? -10 : 0 }} transition={{ duration: 0.3 }}>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span key={i} className="px-2 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="flex gap-4"
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>Code</span>
          </a>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Live Demo</span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}
