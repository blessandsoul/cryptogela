"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote, User, Code, Briefcase, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
    {
        id: 1,
        name: "Alex K.",
        role: "DeFi Trader",
        Icon: TrendingUp,
        rating: 5,
        text: "Best non-custodial exchange I've used. Swapped $50k with zero issues. The speed is unreal!",
    },
    {
        id: 2,
        name: "Maria S.",
        role: "NFT Collector",
        Icon: Briefcase,
        rating: 5,
        text: "Finally a simple way to get SOL for NFT mints. No KYC, no hassle. Just works perfectly.",
    },
    {
        id: 3,
        name: "David R.",
        role: "Crypto Investor",
        Icon: User,
        rating: 5,
        text: "The rates are consistently better than CEXs. Plus the Pump.fun integration is genius!",
    },
    {
        id: 4,
        name: "Emma L.",
        role: "Yield Farmer",
        Icon: Code,
        rating: 5,
        text: "I use itSwap daily for my DeFi operations. Fast, reliable, and the best rates on Solana.",
    },
]

export function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true)

    useEffect(() => {
        if (!autoPlay) return
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [autoPlay])

    const goTo = (index: number) => {
        setCurrentIndex(index)
        setAutoPlay(false)
    }

    const prev = () => goTo((currentIndex - 1 + testimonials.length) % testimonials.length)
    const next = () => goTo((currentIndex + 1) % testimonials.length)

    const CurrentIcon = testimonials[currentIndex].Icon

    return (
        <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
                        <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                            Loved by
                        </span>{" "}
                        <span className="text-primary">Traders</span>
                    </h2>
                    <p className="text-zinc-500 max-w-xl mx-auto">
                        Join 50,000+ users who trust itSwap for their crypto needs.
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="max-w-3xl mx-auto relative">
                    {/* Navigation Buttons */}
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 rounded-full border-zinc-700 hover:border-primary z-10"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 rounded-full border-zinc-700 hover:border-primary z-10"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </Button>

                    {/* Card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-8 md:p-12"
                        >
                            <Quote className="w-10 h-10 text-primary/30 mb-6" />

                            <p className="text-xl md:text-2xl text-white font-medium mb-8 leading-relaxed">
                                &ldquo;{testimonials[currentIndex].text}&rdquo;
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <motion.div
                                        className="w-14 h-14 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center"
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <CurrentIcon className="w-7 h-7 text-primary" />
                                    </motion.div>
                                    <div>
                                        <div className="font-bold text-white">{testimonials[currentIndex].name}</div>
                                        <div className="text-sm text-zinc-500">{testimonials[currentIndex].role}</div>
                                    </div>
                                </div>

                                <div className="flex gap-1">
                                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <Star className="w-5 h-5 fill-primary text-primary" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goTo(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                    ? "w-6 bg-primary"
                                    : "bg-zinc-700 hover:bg-zinc-500"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
