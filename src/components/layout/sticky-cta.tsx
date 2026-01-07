"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, X } from "lucide-react"

export function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false)
    const [isDismissed, setIsDismissed] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past hero section (approx 100vh)
            if (window.scrollY > window.innerHeight && !isDismissed) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [isDismissed])

    if (isDismissed) return null

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 md:hidden"
                >
                    <div className="flex items-center gap-3">
                        <Button
                            asChild
                            size="lg"
                            className="flex-1 font-bold bg-primary text-black hover:bg-primary/90 rounded-xl shadow-[0_0_20px_rgba(0,255,189,0.3)]"
                        >
                            <Link href="#exchange">
                                Start Trading <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                        <button
                            onClick={() => setIsDismissed(true)}
                            className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <p className="text-center text-xs text-zinc-500 mt-2">
                        Start trading in under 30 seconds • 0% fees
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
