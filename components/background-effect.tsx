"use client"

import { useEffect, useState } from "react"

export default function BackgroundEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-slate-200/20 dark:bg-grid-slate-700/20 bg-[length:30px_30px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Gradient orbs */}
      <div
        className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 opacity-20 dark:opacity-10 blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
        }}
      ></div>
      <div
        className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-pink-400 to-orange-500 opacity-20 dark:opacity-10 blur-3xl"
        style={{
          transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
        }}
      ></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingParticles />
      </div>
    </>
  )
}

function FloatingParticles() {
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/30 dark:bg-primary/20"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `float ${particle.duration}s infinite ease-in-out ${particle.delay}s`,
          }}
        ></div>
      ))}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-15px);
          }
          75% {
            transform: translateY(-25px) translateX(5px);
          }
        }
      `}</style>
    </>
  )
}

