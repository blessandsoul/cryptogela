"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Mail, Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function GooglePlayReviewPage() {
    const [email, setEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setIsLoading(true)
        
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        setIsSubmitted(true)
        setIsLoading(false)
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-[#001410] to-black flex items-center justify-center px-4">
            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(0,255,189,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,255,189,0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '4rem 4rem'
                    }}
                />
            </div>

            <div className="container mx-auto max-w-2xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mb-8"
                    >
                        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-green-500/20">
                            <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                            </svg>
                        </div>
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
                        <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                            Google Play Store
                        </span>
                        <br />
                        <span className="text-white">
                            Under Review
                        </span>
                    </h1>

                    <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                        We have applied for Google Play Store. Our application is currently under review and will be available for download soon.
                    </p>

                    <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">What to expect:</h2>
                        <ul className="text-left text-zinc-300 space-y-3">
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span>Same non-custodial security and privacy features</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span>Native Android performance and smooth animations</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span>Seamless integration with Android ecosystem</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span>Biometric authentication support for enhanced security</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_0_2rem_rgba(0,255,189,0.3)] hover:shadow-[0_0_3rem_rgba(0,255,189,0.5)]"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                        
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="flex items-center gap-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="px-4 py-3 bg-zinc-800 text-white rounded-xl border border-zinc-700 focus:border-primary focus:outline-none transition-all duration-300 placeholder-zinc-500"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white font-medium rounded-xl hover:bg-zinc-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <Mail className="w-4 h-4" />
                                    )}
                                    {isLoading ? 'Submitting...' : 'Get Notified'}
                                </button>
                            </form>
                        ) : (
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-xl">
                                <Check className="w-5 h-5 text-green-500" />
                                <span className="text-green-400 font-medium">You'll be notified!</span>
                            </div>
                        )}
                    </div>

                    <p className="text-sm text-zinc-500">
                        Want early access? Try our Android beta version available now.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
