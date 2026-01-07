"use client"

import { useEffect, useRef } from "react"

interface SpotlightProps {
    className?: string
}

export function Spotlight({ className }: SpotlightProps) {
    const spotlightRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const spotlight = spotlightRef.current
        if (!spotlight) return

        // Only enable on hover-capable devices
        const mediaQuery = window.matchMedia("(hover: hover)")
        if (!mediaQuery.matches) return

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            spotlight.style.setProperty("--x", `${clientX}px`)
            spotlight.style.setProperty("--y", `${clientY}px`)
            spotlight.style.opacity = "1"
        }

        const handleMouseLeave = () => {
            spotlight.style.opacity = "0"
        }

        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])

    return (
        <div
            ref={spotlightRef}
            className={`pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-0 ${className}`}
            style={{
                background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(0, 255, 189, 0.06), transparent 40%)`
            }}
        />
    )
}
