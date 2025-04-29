'use client'

import { useDarkMode } from '../context/DarkModeContext'
import Image from 'next/image'

export default function Projects() {
  const { isDarkMode } = useDarkMode()
  
  const projects = [
    {
      name: 'Sciglob Portal',
      description: 'A software portal for Sciglob to manage the hardware and communication between the hardware and the cloud.',
      image: '/images/sci.jpg',
      tags: ['Python', 'Embedded C', 'C++', 'Cloud Computing', 'API Development'],
      link: 'https://github.com/ashutoshjoshi1/Sciglob-Polarizer'
    },
    {
      name: 'Anomaly Detection in Atmospheric Data',
      description: 'A custom web application to check for anomalies in atmospheric data using a combination of machine learning and statistical methods.',
      image: '/images/sci.jpg',
      tags: ['Streamlit', 'Python', 'Statistics', 'Web Development'],
      link: 'https://github.com/ashutoshjoshi1/deep-learning-anomaly'
    },
    {
      name: 'Alignment of Pandora Data',
      description: 'Application to see the data from Pandora in a better way. It checks the good and bad scans and shows the results in a dashboard.',
      image: '/images/sci.jpg',
      tags: ['Streamlit', 'Python', 'Statistics', 'Web Development'],
      link: 'https://alignment.streamlit.app'
    },
    {
      name: 'Pose Estimation for Shopping Mall',
      description: 'A Web app to estimate the pose of a person in a shopping mall from a video.',
      image: '/images/umbc-grading.jpg',
      tags: ['Python', 'Deep Learning', 'Math', 'Web Development', 'Computer Vision'],
      link: 'https://github.com/ashutoshjoshi1/pose-tensorflow'
    },
    {
      name: 'Sarcasm Detection in Twitter',
      description: 'Python script to detect sarcasm in Twitter data using a custom LSTM model.',
      image: '/images/umbc-grading.jpg',
      tags: ['Python', 'Deep Learning', 'LSTM', 'NLP'],
      link: 'https://github.com/ashutoshjoshi1/Twitter-Sarcasm-Analysis'
    },
    {
      name: 'Graduate Admission Neural Network',
      description: 'A Neural Network to predict the chance of admission of a student to a graduate program based on their GRE, TOEFL, University Rating, Statement of Purpose, Letter of Recommendation, and CGPA scores.',
      image: '/images/umbc-grading.jpg',
      tags: ['Python', 'Deep Learning', 'Machine Learning', 'Neural Network'],
      link: 'https://github.com/ashutoshjoshi1/Graduate-Admission-Neural-Network-'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col rounded-lg border border-gray-200 p-6 transition-all duration-200 ease-in hover:border-blue-500 dark:border-gray-700 dark:hover:border-green-500"
        >
          <h3 className="mb-2 text-xl font-bold dark:text-white text-gray-800">{project.name}</h3>
          <p className="mb-4 dark:text-white text-gray-800">{project.description}</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-green-900 dark:text-green-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-blue-600 hover:text-blue-800 dark:text-green-500 dark:hover:text-green-400"
          >
            View Project →
          </a>
        </div>
      ))}
    </div>
  )
} 