"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AxiomIcon } from "@/components/ui/axiom-icon"
import {
    Menu,
    X,
    Rocket,
    Coins,
    HelpCircle,
    Zap,
    Calculator,
    Copy,
    ChevronDown,
    Download
} from "lucide-react"

const navLinks = [
    { href: "#exchange", label: "Exchange", icon: Coins },
    { href: "#calculator", label: "Calculate", icon: Calculator },
    { href: "#memecoin", label: "Our Memecoin", icon: Rocket },
    { href: "#beta-app", label: "Get App", icon: Download },
    { href: "#faq", label: "FAQ", icon: HelpCircle },
]

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [copied, setCopied] = useState(false)
    const [buyDropdownOpen, setBuyDropdownOpen] = useState(false)

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

    const handleCopyCA = async () => {
        try {
            await navigator.clipboard.writeText("CA_ADDRESS_HERE")
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error("Failed to copy CA address:", err)
        }
    }

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
                        <div className="flex flex-col">
                            <div className="flex items-baseline gap-0.5">
                                <span className="text-2xl md:text-3xl font-black tracking-tight">
                                    <span className="text-primary">it</span>
                                    <span className="text-purple-400">Swap</span>
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center">
                        <div className="flex items-center gap-1 bg-zinc-900/80 border border-zinc-800 rounded-full px-2 py-1.5">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-400 hover:text-purple-400 hover:bg-zinc-800 rounded-full transition-all"
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
                            onClick={handleCopyCA}
                            size="lg"
                            className="relative group font-black text-base bg-green-500 border border-green-600 text-black hover:bg-green-600 rounded-full px-6 py-3 transition-all hover:scale-105"
                        >
                            <Copy className="w-5 h-5 mr-2" />
                            {copied ? "Copied!" : "Contract Address"}
                        </Button>
                        <div className="relative">
                            <Button
                                onClick={() => setBuyDropdownOpen(!buyDropdownOpen)}
                                size="lg"
                                className="relative group font-black text-base bg-purple-600 border border-purple-700 text-white hover:bg-purple-700 rounded-full px-6 py-3 transition-all hover:scale-105"
                            >
                                <Zap className="w-5 h-5 mr-2 animate-pulse" />
                                Buy $ITSWAP Memecoin
                                <ChevronDown className={cn("w-4 h-4 ml-2 transition-transform", buyDropdownOpen && "rotate-180")} />
                            </Button>
                            <AnimatePresence>
                                {buyDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full mt-2 right-0 w-64 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl overflow-hidden z-50"
                                    >
                                        <Link
                                            href="https://axiom.trade"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => setBuyDropdownOpen(false)}
                                            className="flex items-center gap-3 px-6 py-4 text-white hover:bg-zinc-800 transition-colors border-b border-zinc-800"
                                        >
                                            <Rocket className="w-5 h-5 text-primary" />
                                            <span className="font-bold">Buy on AXIOM</span>
                                        </Link>
                                        <Link
                                            href="https://pump.fun"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => setBuyDropdownOpen(false)}
                                            className="flex items-center gap-3 px-6 py-4 text-white hover:bg-zinc-800 transition-colors"
                                        >
                                            <AxiomIcon className="w-5 h-5" />
                                            <span className="font-bold">Buy on PUMPFUN</span>
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
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
                                        className="flex items-center gap-4 text-2xl font-bold text-purple-400 hover:text-primary transition-colors px-6 py-3 rounded-2xl hover:bg-zinc-900"
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
                                        Buy $ITSWAP Memecoin
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
