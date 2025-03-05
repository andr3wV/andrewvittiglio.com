'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    {
      name: 'Twitter',
      url: 'https://twitter.com/andr3wV',
      icon: <Twitter className="h-6 w-6" />,
      color: 'hover:text-blue-400',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/andr3wV',
      icon: <Linkedin className="h-6 w-6" />,
      color: 'hover:text-blue-700',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/andr3wV',
      icon: <Github className="h-6 w-6" />,
      color: 'hover:text-gray-800',
    },
    {
      name: 'Email',
      url: 'mailto:avittig2@nd.edu',
      icon: <Mail className="h-6 w-6" />,
      color: 'hover:text-red-500',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-8">
      <div className="flex flex-wrap justify-center gap-6">
        {socialLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link 
              href={link.url}
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center p-4 rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${link.color}`}
            >
              <div className="text-black mb-2">
                {link.icon}
              </div>
              <span className="text-sm font-medium text-black">
                {link.name}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <span className="text-lg text-black font-medium">@andr3wV</span>
        <div className="text-md text-black">avittig2@nd.edu</div>
      </motion.div>
    </div>
  );
}
