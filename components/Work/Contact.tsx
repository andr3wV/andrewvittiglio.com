"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Twitter, Linkedin, Github, Mail } from "lucide-react"

export default function Contact() {
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://x.com/avittig",
      icon: <Twitter className="h-6 w-6 sm:h-7 sm:w-7" />,
      color: "hover:text-blue-400",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/andr3wV",
      icon: <Linkedin className="h-6 w-6 sm:h-7 sm:w-7" />,
      color: "hover:text-blue-700",
    },
    {
      name: "GitHub",
      url: "https://github.com/andr3wV",
      icon: <Github className="h-6 w-6 sm:h-7 sm:w-7" />,
      color: "hover:text-gray-800",
    },
    {
      name: "Email",
      url: "mailto:andrewv433@gmail.com",
      icon: <Mail className="h-6 w-6 sm:h-7 sm:w-7" />,
      color: "hover:text-red-500",
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-3 sm:space-y-4 overflow-y-auto py-4 px-2 sm:py-6 sm:px-4">
      <div className="flex flex-col w-full space-y-3 sm:space-y-4">
        {socialLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full"
          >
            <Link
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center p-4 sm:p-5 rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${link.color} w-full`}
            >
              <div className="text-black mr-3 sm:mr-4">{link.icon}</div>
              <span className="text-base sm:text-lg font-medium text-black">{link.name}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

