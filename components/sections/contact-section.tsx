"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

import { TextReveal } from "@/components/ui/text-reveal"
import { ContactForm } from "@/components/ui/contact-form"

export const ContactSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="contact" className="relative min-h-screen w-full py-20 px-4 md:px-10">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-green-950/10 to-black/0 z-0"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <TextReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white">Get In Touch</h2>
        </TextReveal>

        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50">
          <ContactForm />
        </div>

        <div className="mt-16 flex justify-center space-x-8">
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-green-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-6 w-6" />
            <span>GitHub</span>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-green-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="h-6 w-6" />
            <span>LinkedIn</span>
          </motion.a>
          <motion.a
            href="mailto:your.email@example.com"
            className="flex items-center gap-2 text-white hover:text-green-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="h-6 w-6" />
            <span>Email</span>
          </motion.a>
        </div>
      </div>
    </section>
  )
})

ContactSection.displayName = "ContactSection"
