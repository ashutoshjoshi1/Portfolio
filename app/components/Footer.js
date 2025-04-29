'use client'

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useDarkMode } from '../context/DarkModeContext'

export default function Footer() {
  const { isDarkMode } = useDarkMode()
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`mt-20 w-full py-8 ${isDarkMode ? 'bg-[#111] text-white' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://github.com/ashutoshjoshi1"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl transition-colors duration-200 hover:text-blue-500 ${isDarkMode ? 'text-green-500' : 'text-blue-600'}`}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ashutosh--joshi/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl transition-colors duration-200 hover:text-blue-500 ${isDarkMode ? 'text-green-500' : 'text-blue-600'}`}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.quora.com/Am-I-the-only-one-that-doesnt-have-a-Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl transition-colors duration-200 hover:text-blue-500 ${isDarkMode ? 'text-green-500' : 'text-blue-600'}`}
            >
              <FaTwitter />
            </a>
          </div>
          <div className="text-center">
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © {currentYear} Ashutosh Joshi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 