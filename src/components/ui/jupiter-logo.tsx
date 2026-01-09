export function JupiterLogo({ className = "w-12 h-12" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="jupiter-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C4F566" />
                    <stop offset="100%" stopColor="#8FE8B8" />
                </linearGradient>
                <linearGradient id="jupiter-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8FE8B8" />
                    <stop offset="100%" stopColor="#5ADBC4" />
                </linearGradient>
                <linearGradient id="jupiter-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5ADBC4" />
                    <stop offset="100%" stopColor="#25CED1" />
                </linearGradient>
                <linearGradient id="jupiter-gradient-4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#25CED1" />
                    <stop offset="100%" stopColor="#00B8D4" />
                </linearGradient>
                <linearGradient id="jupiter-gradient-5" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00B8D4" />
                    <stop offset="100%" stopColor="#0091B3" />
                </linearGradient>
                <linearGradient id="jupiter-gradient-6" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0091B3" />
                    <stop offset="100%" stopColor="#006A92" />
                </linearGradient>
            </defs>
            
            {/* Arc 1 - Top/Outermost */}
            <path
                d="M 180 100 A 80 80 0 0 0 100 20"
                stroke="url(#jupiter-gradient-1)"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
            />
            
            {/* Arc 2 */}
            <path
                d="M 170 100 A 70 70 0 0 0 100 30"
                stroke="url(#jupiter-gradient-2)"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
            />
            
            {/* Arc 3 */}
            <path
                d="M 160 100 A 60 60 0 0 0 100 40"
                stroke="url(#jupiter-gradient-3)"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
            />
            
            {/* Arc 4 */}
            <path
                d="M 150 100 A 50 50 0 0 0 100 50"
                stroke="url(#jupiter-gradient-4)"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
            />
            
            {/* Arc 5 */}
            <path
                d="M 140 100 A 40 40 0 0 0 100 60"
                stroke="url(#jupiter-gradient-5)"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
            />
            
            {/* Arc 6 - Innermost */}
            <path
                d="M 130 100 A 30 30 0 0 0 100 70"
                stroke="url(#jupiter-gradient-6)"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
            />
        </svg>
    )
}
