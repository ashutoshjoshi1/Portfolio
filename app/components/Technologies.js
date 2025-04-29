'use client'

import { useDarkMode } from '../context/DarkModeContext'
import { 
  FaPython, 
  FaCalculator, 
  FaJs, 
  FaCloud, 
  FaChartBar, 
  FaLaptopCode, 
  FaDatabase, 
  FaDocker, 
  FaRobot, 
  FaGitAlt, 
  FaBolt, 
  FaMicrochip, 
  FaReact, 
  FaNodeJs, 
  FaLeaf 
} from 'react-icons/fa'

export default function Technologies() {
  const { isDarkMode } = useDarkMode()
  
  const technologies = [
    { name: 'Python', icon: FaPython },
    { name: 'SDLC', icon: FaCalculator },
    { name: 'JavaScript', icon: FaJs },
    { name: 'Cloud Computing', icon: FaCloud },
    { name: 'Data Science', icon: FaChartBar },
    { name: 'Generative AI', icon: FaLaptopCode },
    { name: 'PostgreSQL', icon: FaDatabase },
    { name: 'Docker', icon: FaDocker },
    { name: 'Agentic AI', icon: FaRobot },
    { name: 'Git', icon: FaGitAlt },
    { name: 'C++', icon: FaBolt },
    { name: 'Embedded C', icon: FaMicrochip },
    { name: 'React', icon: FaReact },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'MongoDB', icon: FaLeaf },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
      {technologies.map((tech, index) => {
        const Icon = tech.icon
        return (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 mb-3 flex items-center justify-center">
              <Icon className="w-10 h-10 md:w-14 md:h-14 text-blue-600 dark:text-green-500" />
            </div>
            <span className="text-sm md:text-base font-medium text-center dark:text-white text-gray-800">
              {tech.name}
            </span>
          </div>
        )
      })}
    </div>
  )
} 