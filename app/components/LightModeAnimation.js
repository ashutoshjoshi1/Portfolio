'use client'

import { useEffect, useRef } from 'react'
import { useDarkMode } from '../context/DarkModeContext'

export default function LightModeAnimation() {
  const { isDarkMode } = useDarkMode()
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', resize)

    class Particle {
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * 2
        this.vy = (Math.random() - 0.5) * 2
        this.radius = Math.random() * 3 + 1
        this.color = isDarkMode 
          ? `rgba(34, 197, 94, ${Math.random() * 0.5 + 0.2})` // Green for dark mode
          : `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.2})` // Blue for light mode
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > width) this.vx = -this.vx
        if (this.y < 0 || this.y > height) this.vy = -this.vy
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    const init = () => {
      particlesRef.current = []
      for (let i = 0; i < 100; i++) {
        particlesRef.current.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      
      particlesRef.current.forEach(particle => {
        particle.update()
        particle.draw()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    init()
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [isDarkMode])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      style={{ opacity: 0.5 }}
    />
  )
} 