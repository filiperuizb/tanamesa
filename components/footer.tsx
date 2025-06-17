"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"

export default function Footer() {
  const [animateIn, setAnimateIn] = useState(false)
  const currentYear = new Date().getFullYear()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    setAnimateIn(true)

    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-l from-[#1a0b00] to-[#1a0b00] via-10% via-[#2e1a0b] border-t border-orange-900/20"
    >
      <div className="container relative z-10 mx-auto py-8 px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: animateIn ? 0 : 20, opacity: animateIn ? 1 : 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="flex flex-col md:flex-row items-center justify-center w-full gap-4"
          >
            <div className="flex items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-orange-500/20 filter blur-md"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
                <Image
                  className="w-20 sm:w-24 transition-all duration-300 hover:brightness-110 relative z-10"
                  src="/logo.png"
                  width={96}
                  height={96}
                  alt="TA NA MESA Logo"
                  priority
                />
              </motion.div>

              <motion.div
                animate={{
                  height: [20, 30, 20],
                  background: [
                    "linear-gradient(to bottom, rgba(255, 107, 53, 0.8), rgba(255, 107, 53, 0.3))",
                    "linear-gradient(to bottom, rgba(247, 147, 30, 0.8), rgba(247, 147, 30, 0.3))",
                    "linear-gradient(to bottom, rgba(255, 107, 53, 0.8), rgba(255, 107, 53, 0.3))",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="w-px h-8 bg-gradient-to-b from-orange-500/80 to-orange-700/30"
              />

              <motion.p
                className="text-center text-sm sm:text-base code-bold"
                animate={{
                  color: ["rgba(255, 255, 255, 0.8)", "rgba(255, 180, 120, 0.9)", "rgba(255, 255, 255, 0.8)"],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              >
                <span className="hidden md:inline">Copyright</span> © {currentYear} TA NA MESA
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
