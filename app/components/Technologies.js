'use client'

import { useDarkMode } from '../context/DarkModeContext'

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
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center rounded-lg border border-gray-200 p-4 transition-all duration-200 ease-in hover:border-blue-500 dark:border-gray-700 dark:hover:border-green-500"
        >
          <span className="mb-2 text-3xl">{tech.icon}</span>
          <span className="text-center font-medium dark:text-white text-gray-800">{tech.name}</span>
        </div>
      ))}
    </div>
  )
} 