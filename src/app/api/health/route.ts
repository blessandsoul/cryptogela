import { NextResponse } from 'next/server'
import { getDatabase } from '@/lib/mongodb'

export async function GET() {
    try {
        const db = await getDatabase()
        await db.admin().ping()

        const groqApiKey = process.env.GROQ_API_KEY
        const changenowApiKey = process.env.CHANGENOW_API_KEY

        const checks = {
            status: 'healthy',
            timestamp: new Date().toISOString(),
            services: {
                database: 'connected',
                groqApi: groqApiKey ? 'configured' : 'missing',
                changenowApi: changenowApiKey ? 'configured' : 'missing',
            },
            environment: process.env.NODE_ENV || 'development',
        }

        const allHealthy = 
            checks.services.database === 'connected' &&
            checks.services.groqApi === 'configured' &&
            checks.services.changenowApi === 'configured'

        return NextResponse.json(checks, {
            status: allHealthy ? 200 : 503
        })
    } catch (error) {
        return NextResponse.json(
            {
                status: 'unhealthy',
                timestamp: new Date().toISOString(),
                error: error instanceof Error ? error.message : 'Unknown error',
            },
            { status: 503 }
        )
    }
}
