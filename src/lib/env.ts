import { z } from 'zod'

const envSchema = z.object({
    GROQ_API_KEY: z.string().min(1, 'GROQ_API_KEY is required').optional(),
    CHANGENOW_API_KEY: z.string().min(1, 'CHANGENOW_API_KEY is required').optional(),
    MONGODB_URI: z.string().min(1, 'MONGODB_URI is required').optional(),
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
})

export function validateEnv() {
    const env = envSchema.parse({
        GROQ_API_KEY: process.env.GROQ_API_KEY,
        CHANGENOW_API_KEY: process.env.CHANGENOW_API_KEY,
        MONGODB_URI: process.env.MONGODB_URI,
        NODE_ENV: process.env.NODE_ENV,
    })
    return env
}

export function getEnv() {
    const env = validateEnv()
    
    // Only validate required vars at runtime, not build time
    if (typeof window === 'undefined' && process.env.NODE_ENV !== 'test') {
        const missing = []
        if (!env.GROQ_API_KEY) missing.push('GROQ_API_KEY')
        if (!env.CHANGENOW_API_KEY) missing.push('CHANGENOW_API_KEY')
        if (!env.MONGODB_URI) missing.push('MONGODB_URI')
        
        if (missing.length > 0) {
            console.warn(`Warning: Missing environment variables: ${missing.join(', ')}`)
        }
    }
    
    return env
}

export const env = validateEnv()
