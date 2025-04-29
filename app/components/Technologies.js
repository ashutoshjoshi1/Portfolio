'use client'

import { useDarkMode } from '../context/DarkModeContext'
import Image from 'next/image'

export default function Technologies() {
  const { isDarkMode } = useDarkMode()
  
  const technologies = [
    { name: 'Python', icon: '🐍' },
    { name: 'SDLC', icon: '🧮' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'Cloud Computing', icon: '☁️' },
    { name: 'Data Science', icon: '📊' },
    { name: 'Generative AI', icon: '💻' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Agentic AI', icon: '🤖' },
    { name: 'Git', icon: '📦' },
    { name: 'C++', icon: '⚡' },
    { name: 'Embedded C', icon: '🔌' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="w-12 h-12 md:w-16 md:h-16 mb-3 relative">
            <Image
              src={tech.icon}
              alt={tech.name}
              fill
              className="object-contain"
            />
          </div>
          <span className="text-sm md:text-base font-medium text-center dark:text-white text-gray-800">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  )
} 