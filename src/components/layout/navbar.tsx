"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
    Menu,
    X,
    Rocket,
    Coins,
    HelpCircle,
    Zap
} from "lucide-react"

const navLinks = [
    { href: "#exchange", label: "Exchange", icon: Coins },
    { href: "#faq", label: "FAQ", icon: HelpCircle },
]

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false)
            }
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={cn(
                    "fixed top-0 z-50 w-full transition-all duration-500",
                    scrolled
                        ? "bg-black/90 backdrop-blur-xl border-b border-zinc-800/50 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                        : "bg-black/50 backdrop-blur-sm border-b border-transparent"
                )}
            >
                <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="group flex items-center gap-3 transition-all hover:opacity-90"
                    >
                        <motion.div
                            className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-emerald-500 to-primary border-2 border-primary/50 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(0,255,189,0.3)]"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-conic from-primary via-emerald-400 to-primary opacity-50"
                            />
                            <Rocket className="w-6 h-6 text-black relative z-10" />
                        </motion.div>

                        <div className="flex flex-col">
                            <div className="flex items-baseline gap-0.5">
                                <span className="text-2xl md:text-3xl font-black tracking-tight">
                                    <span className="text-primary">it</span>
                                    <span className="text-white">Swap</span>
                                </span>
                                <span className="text-primary text-lg font-bold">.fun</span>
                            </div>
                            <span className="text-[10px] text-zinc-500 font-medium tracking-wider uppercase hidden md:block">
                                Meme Coin Exchange
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center">
                        <div className="flex items-center gap-1 bg-zinc-900/80 border border-zinc-800 rounded-full px-2 py-1.5">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-all"
                                >
                                    <link.icon className="w-4 h-4 text-primary" />
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button
                            asChild
                            size="lg"
                            className="relative group font-black text-base bg-gradient-to-r from-primary via-emerald-400 to-primary bg-[length:200%_auto] animate-gradient-x text-black rounded-full px-6 py-3 shadow-[0_0_30px_rgba(0,255,189,0.4)] hover:shadow-[0_0_50px_rgba(0,255,189,0.6)] transition-all hover:scale-105 border-2 border-primary/50"
                        >
                            <Link href="https://pump.fun" target="_blank" rel="noopener noreferrer">
                                <Zap className="w-5 h-5 mr-2 animate-pulse" />
                                BUY $ITSWAP
                                <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden relative z-50 w-12 h-12 rounded-xl bg-zinc-900/80 border border-zinc-800"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <AnimatePresence mode="wait">
                            {mobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-6 h-6" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="w-6 h-6" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-black/98 backdrop-blur-xl md:hidden"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col items-center justify-center min-h-screen gap-6 p-6"
                        >
                            {/* Mobile Nav Links */}
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center gap-4 text-2xl font-bold text-white hover:text-primary transition-colors px-6 py-3 rounded-2xl hover:bg-zinc-900"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                                            <link.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Mobile CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="pt-6 w-full max-w-xs"
                            >
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full font-black text-lg bg-gradient-to-r from-primary to-emerald-400 text-black rounded-2xl py-6 shadow-[0_0_40px_rgba(0,255,189,0.4)]"
                                >
                                    <Link
                                        href="https://pump.fun"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Zap className="w-6 h-6 mr-2" />
                                        BUY $ITSWAP
                                        <Rocket className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
