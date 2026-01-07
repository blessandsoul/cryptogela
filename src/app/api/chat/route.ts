import { NextRequest, NextResponse } from "next/server"
import Groq from "groq-sdk"

// Initialize Groq client
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
})

/**
 * itSwap AI System Prompt
 * No emojis - professional tone only
 */
const SYSTEM_PROMPT = `# itSwap AI Assistant

## Identity
You are itSwap AI, the support assistant for itSwap.fun — a non-custodial crypto exchange platform on Solana.

## Personality
- Tone: Professional yet approachable
- Style: Concise, clear, helpful. NO EMOJIS.
- Language: English primarily, Russian if user writes in Russian

## Core Knowledge

### What is itSwap?
itSwap.fun is a non-custodial crypto exchange:
1. Step 1: Exchange any cryptocurrency (500+ supported) for SOL using the ChangeNow widget
2. Step 2: Buy ITSWAP tokens directly on Pump.fun

### Key Features
- Non-Custodial: Users keep their private keys
- No KYC: Complete privacy
- Zero Platform Fees: Only blockchain gas fees
- Instant Swaps: 5-30 minutes
- 500+ Cryptocurrencies supported

### Limits
- Minimum swap: ~$10
- Maximum: No limit
- Fees: 0% platform fee

### Security
- Non-custodial architecture
- End-to-end encryption
- Audited integrations

### Support
- 24/7 AI support
- Email: support@itswap.fun

## Response Guidelines
- Keep responses under 150 words
- Answer directly and concisely
- Never use emojis
- For transaction issues, ask for ID and suggest email support
- Never provide financial advice
`

export async function POST(request: NextRequest) {
    try {
        const { message, history = [] } = await request.json()

        if (!message) {
            return NextResponse.json(
                { error: "Message is required" },
                { status: 400 }
            )
        }

        const messages = [
            { role: "system" as const, content: SYSTEM_PROMPT },
            ...history.slice(-10),
            { role: "user" as const, content: message },
        ]

        const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages,
            temperature: 0.7,
            max_tokens: 500,
            stream: false,
        })

        const reply = completion.choices[0]?.message?.content || "Sorry, I could not generate a response."

        return NextResponse.json({ reply })
    } catch (error) {
        console.error("Groq API error:", error)
        return NextResponse.json(
            { error: "Failed to get AI response. Please try again." },
            { status: 500 }
        )
    }
}
