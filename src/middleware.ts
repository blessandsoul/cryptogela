import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const rateLimit = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT_WINDOW = 60 * 1000
const MAX_REQUESTS_PER_WINDOW = 100

function getRateLimitKey(request: NextRequest): string {
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown'
    return ip
}

function checkRateLimit(key: string): boolean {
    const now = Date.now()
    const record = rateLimit.get(key)

    if (!record || now > record.resetTime) {
        rateLimit.set(key, {
            count: 1,
            resetTime: now + RATE_LIMIT_WINDOW
        })
        return true
    }

    if (record.count >= MAX_REQUESTS_PER_WINDOW) {
        return false
    }

    record.count++
    return true
}

setInterval(() => {
    const now = Date.now()
    for (const [key, record] of rateLimit.entries()) {
        if (now > record.resetTime) {
            rateLimit.delete(key)
        }
    }
}, RATE_LIMIT_WINDOW)

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/api/')) {
        const key = getRateLimitKey(request)
        
        if (!checkRateLimit(key)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { 
                    status: 429,
                    headers: {
                        'Retry-After': '60'
                    }
                }
            )
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/api/:path*',
}
