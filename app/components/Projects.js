'use client'

import { useDarkMode } from '../context/DarkModeContext'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  const { isDarkMode } = useDarkMode()
  
  const projects = [
    {
      name: 'Sciglob Portal',
      description: 'A software portal for Sciglob to manage the hardware and communication between the hardware and the cloud.',
      image: './images/sci.jpg',
      tags: ['Python', 'Embedded C', 'C++', 'Cloud Computing', 'API Development'],
      link: 'https://github.com/ashutoshjoshi1/Sciglob-Polarizer'
    },
    {
      name: 'Anomaly Detection in Atmospheric Data',
      description: 'A custom web application to check for anomalies in atmospheric data using a combination of machine learning and statistical methods.',
      image: './images/sci.jpg',
      tags: ['Streamlit', 'Python', 'Statistics', 'Web Development'],
      link: 'https://github.com/ashutoshjoshi1/deep-learning-anomaly'
    },
    {
      name: 'Alignment of Pandora Data',
      description: 'Application to see the data from Pandora in a better way. It checks the good and bad scans and shows the results in a dashboard.',
      image: './images/sci.jpg',
      tags: ['Streamlit', 'Python', 'Statistics', 'Web Development'],
      link: 'https://alignment.streamlit.app'
    },
    {
      name: 'Pose Estimation for Shopping Mall',
      description: 'A Web app to estimate the pose of a person in a shopping mall from a video.',
      image: './images/pose.jpg',
      tags: ['Python', 'Deep Learning', 'Math', 'Web Development', 'Computer Vision'],
      link: 'https://github.com/ashutoshjoshi1/pose-tensorflow'
    },
    {
      name: 'Sarcasm Detection in Twitter',
      description: 'Python script to detect sarcasm in Twitter data using a custom LSTM model.',
      image: './images/twitter.jpg',
      tags: ['Python', 'Deep Learning', 'LSTM', 'NLP'],
      link: 'https://github.com/ashutoshjoshi1/Twitter-Sarcasm-Analysis'
    },
    {
      name: 'Graduate Admission Neural Network',
      description: 'A Neural Network to predict the chance of admission of a student to a graduate program based on their GRE, TOEFL, University Rating, Statement of Purpose, Letter of Recommendation, and CGPA scores.',
      image: './images/umbc.jpg',
      tags: ['Python', 'Deep Learning', 'Machine Learning', 'Neural Network'],
      link: 'https://github.com/ashutoshjoshi1/Graduate-Admission-Neural-Network-'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
        >
          <div className="relative h-48 md:h-56">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 md:p-6 flex flex-col flex-grow">
            <h3 className="text-xl md:text-2xl font-bold mb-2 dark:text-white text-gray-800">
              {project.name}
            </h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 text-xs md:text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <FaGithub className="text-lg md:text-xl" />
                <span>View on GitHub</span>
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <FaExternalLinkAlt className="text-lg md:text-xl" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 