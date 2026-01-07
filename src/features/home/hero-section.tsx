"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, HelpCircle } from "lucide-react"

// Animated floating orbs
function FloatingOrb({ delay, size, position, intensity }: {
    delay: number
    size: string
    position: { top?: string, bottom?: string, left?: string, right?: string }
    intensity: 'high' | 'medium' | 'low'
}) {
    const opacityMap = { high: '30', medium: '20', low: '10' }
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: 1,
                scale: [1, 1.2, 1],
                x: [0, 30, -30, 0],
                y: [0, -20, 20, 0]
            }}
            transition={{
                opacity: { delay, duration: 1 },
                scale: { delay: delay + 0.5, duration: 8, repeat: Infinity, ease: "easeInOut" },
                x: { delay: delay + 0.5, duration: 12, repeat: Infinity, ease: "easeInOut" },
                y: { delay: delay + 0.5, duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
            className={`absolute ${size} rounded-full blur-[6rem]`}
            style={{
                ...position,
                background: `radial-gradient(circle, rgba(0,255,189,0.${opacityMap[intensity]}) 0%, transparent 70%)`
            }}
        />
    )
}

// Particle effect - client-side only to avoid hydration mismatch
function Particles() {
    const [particles, setParticles] = useState<Array<{
        id: number
        x: number
        left: number
        duration: number
        delay: number
    }>>([])

    useEffect(() => {
        // Generate random values only on client
        setParticles(
            [...Array(20)].map((_, i) => ({
                id: i,
                x: Math.random() * 100,
                left: Math.random() * 100,
                duration: 8 + Math.random() * 4,
                delay: Math.random() * 5
            }))
        )
    }, [])

    if (particles.length === 0) return null

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    initial={{
                        opacity: 0,
                        x: particle.x + '%',
                        y: '100%'
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        y: '-20%'
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "linear"
                    }}
                    className="absolute w-1 h-1 rounded-full bg-primary/40"
                    style={{ left: `${particle.left}%` }}
                />
            ))}
        </div>
    )
}

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, 200])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])


    // Mouse follower effect
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 })
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const rect = containerRef.current?.getBoundingClientRect()
            if (rect) {
                mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.02)
                mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.02)
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20 md:pt-24"
        >
            {/* Layered Background Effects */}
            <div className="absolute inset-0 z-0">
                {/* Base gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,20,15,1)_0%,rgba(0,0,0,1)_70%)]" />

                {/* Animated grid */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(0,255,189,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,255,189,0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '4rem 4rem'
                    }}
                />

                {/* Floating Orbs */}
                <FloatingOrb delay={0} size="w-[50rem] h-[50rem]" position={{ top: '-20%', left: '-10%' }} intensity="medium" />
                <FloatingOrb delay={0.3} size="w-[40rem] h-[40rem]" position={{ bottom: '-20%', right: '-10%' }} intensity="low" />
                <FloatingOrb delay={0.6} size="w-[30rem] h-[30rem]" position={{ top: '40%', right: '20%' }} intensity="high" />

                {/* Particles */}
                <Particles />

                {/* Spotlight effect */}
                <motion.div
                    style={{ x: smoothX, y: smoothY }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[80rem] bg-primary/5 rounded-full blur-[10rem] pointer-events-none"
                />
            </div>

            {/* Main Content */}
            <motion.div
                style={{ y, opacity, scale }}
                className="relative z-10 container mx-auto px-4 text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Live Badge with glow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="mb-6"
                    >
                        <Badge
                            variant="outline"
                            className="px-5 py-2.5 text-sm font-semibold bg-primary/10 border-primary/30 text-primary shadow-[0_0_2rem_rgba(0,255,189,0.2)] backdrop-blur-sm"
                        >
                            <img 
                                src="https://statics.solscan.io/solscan-img/token_creator_icon.svg" 
                                alt="itSwap" 
                                className="w-4 h-4 mr-2"
                            />
                            itSwap.fun
                        </Badge>
                    </motion.div>

                    {/* Hero Headline with dramatic reveal */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-[0.85]"
                        style={{ textWrap: 'balance' }}
                    >
                        <span className="block bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                            The Future of
                        </span>
                        <motion.span
                            initial={{ backgroundPosition: "0% 50%" }}
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="block bg-gradient-to-r from-primary via-teal-300 to-primary bg-clip-text text-transparent bg-[length:200%_auto]"
                        >
                            Crypto Exchange
                        </motion.span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed font-light"
                    >
                        Non-custodial. Instant. Secure. Exchange any cryptocurrency for SOL and trade <span className="text-primary font-medium">$ITSWAP</span> directly.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10"
                    >
                        <Link
                            href="#exchange"
                            className={cn(
                                buttonVariants({ size: "lg" }),
                                "group relative px-10 py-7 text-lg font-bold bg-primary text-black hover:bg-primary/90 rounded-2xl shadow-[0_0_4rem_rgba(0,255,189,0.4)] hover:shadow-[0_0_6rem_rgba(0,255,189,0.6)] transition-all duration-500 hover:scale-[1.02]"
                            )}
                        >
                            <span className="relative z-10 flex items-center">
                                Start Trading Now
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                            </span>
                        </Link>
                        <Link
                            href="#faq"
                            className={cn(
                                buttonVariants({ variant: "outline", size: "lg" }),
                                "group px-10 py-7 text-lg font-medium rounded-2xl border-zinc-700/50 bg-zinc-900/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 shadow-[0_0_2rem_rgba(0,0,0,0.5)] hover:shadow-[0_0_3rem_rgba(0,255,189,0.1)]"
                            )}
                        >
                            <span className="flex items-center gap-2">
                                Learn More
                                <HelpCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                            </span>
                        </Link>
                    </motion.div>

                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-7 h-12 rounded-full border-2 border-zinc-700/50 flex justify-center pt-2 backdrop-blur-sm"
                >
                    <motion.div
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-3 rounded-full bg-primary"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}
