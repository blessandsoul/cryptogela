"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqItems = [
    {
        question: "Is itSwap safe?",
        answer: "itSwap is non-custodial. We use enterprise-grade APIs to ensure your swaps are secure, private, and fast. You retain full control of your funds at all times."
    },
    {
        question: "How does itSwap work?",
        answer: "Use Step 1 to exchange any crypto for SOL using our integrated widget. Then use Step 2 to buy $ITSWAP directly on Pump.fun. The interface monitors real-time activity to help you time your entry."
    },
    {
        question: "What are the fees?",
        answer: "itSwap charges 0% platform fees. You only pay network transaction fees (gas) required by the blockchain. The rates you see are the rates you get."
    },
    {
        question: "Do I need KYC to use itSwap?",
        answer: "No. itSwap is completely anonymous and requires no KYC verification. Your privacy is our priority."
    },
    {
        question: "What cryptocurrencies can I exchange?",
        answer: "You can exchange over 500+ cryptocurrencies including Bitcoin, Ethereum, USDT, USDC, and many more for SOL through our integrated ChangeNow widget."
    },
    {
        question: "How long do swaps take?",
        answer: "Most swaps complete within 5-30 minutes depending on network congestion. SOL transactions on Pump.fun are near-instant."
    },
    {
        question: "Is there a minimum/maximum swap amount?",
        answer: "Minimum swap is approximately $10 worth of crypto. There is no maximum limit for most cryptocurrencies."
    },
    {
        question: "What if I have issues with my swap?",
        answer: "Our 24/7 support team is available via the chat widget. You can also email support@itswap.fun with your transaction details."
    },
]

export function FAQSection() {
    return (
        <section id="faq" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />

            <div className="container mx-auto px-4 max-w-3xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
                        <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                            Frequently Asked
                        </span>{" "}
                        <span className="text-primary">Questions</span>
                    </h2>
                    <p className="text-zinc-500">
                        Everything you need to know about itSwap.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Accordion type="single" collapsible className="w-full space-y-3">
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border border-zinc-800 rounded-2xl bg-zinc-900/50 backdrop-blur-sm px-6 overflow-hidden"
                            >
                                <AccordionTrigger className="text-lg text-zinc-200 hover:text-white py-5">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-zinc-400 text-base leading-relaxed pb-5">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}
