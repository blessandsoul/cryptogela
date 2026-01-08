import { z } from 'zod'

const envSchema = z.object({
    GROQ_API_KEY: z.string().min(1, 'GROQ_API_KEY is required'),
    CHANGENOW_API_KEY: z.string().min(1, 'CHANGENOW_API_KEY is required'),
    MONGODB_URI: z.string().min(1, 'MONGODB_URI is required'),
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
})

export function validateEnv() {
    try {
        const env = envSchema.parse({
            GROQ_API_KEY: process.env.GROQ_API_KEY,
            CHANGENOW_API_KEY: process.env.CHANGENOW_API_KEY,
            MONGODB_URI: process.env.MONGODB_URI,
            NODE_ENV: process.env.NODE_ENV,
        })
        return env
    } catch (error) {
        if (error instanceof z.ZodError) {
            const missingVars = error.issues.map(e => e.path.join('.')).join(', ')
            throw new Error(`Missing or invalid environment variables: ${missingVars}`)
        }
        throw error
    }
}

export const env = validateEnv()
