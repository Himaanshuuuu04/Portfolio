"use client"

import type React from "react"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

import { TextReveal } from "@/components/ui/text-reveal"
import { SkillsGrid } from "@/components/ui/skills-grid"

export const AboutSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="about" className="relative min-h-screen w-full py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <TextReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white">About Me</h2>
        </TextReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Image Column */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-600 blur-xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border-2 border-green-500/30 overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=400" alt="Profile" fill className="object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-green-400 mb-4">Full Stack Developer</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate Full Stack Developer with expertise in modern web technologies. With a strong foundation
              in both frontend and backend development, I create seamless, responsive, and user-friendly applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              My journey in tech began with a curiosity about how things work on the web, which evolved into a career
              building innovative solutions for real-world problems.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Name</h4>
                <p className="text-gray-400">Himanshu Singh</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Email</h4>
                <p className="text-gray-400">contact@example.com</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Location</h4>
                <p className="text-gray-400">New Delhi, India</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Availability</h4>
                <p className="text-gray-400">Open to opportunities</p>
              </div>
            </div>

            <AnimatedButton>
              <a
                href="https://drive.google.com/file/d/1q2r3s4t5u6v7w8x9y0z1a2b3c4d5e6f/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </AnimatedButton>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <TextReveal>
            <h3 className="text-3xl font-bold text-center text-white mb-12">My Skills</h3>
          </TextReveal>
          <SkillsGrid />
        </div>
      </div>
    </section>
  )
})

AboutSection.displayName = "AboutSection"

function AnimatedButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-green-900 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6 text-white inline-block"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-6 ring-1 ring-white/10">
        <span>{children}</span>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </motion.button>
  )
}
