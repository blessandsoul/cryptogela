export function PumpFunIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M16.5 5.5C19.5376 5.5 22 7.96243 22 11V13C22 16.0376 19.5376 18.5 16.5 18.5H7.5C4.46243 18.5 2 16.0376 2 13V11C2 7.96243 4.46243 5.5 7.5 5.5H16.5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.5 5.5C4.46243 5.5 2 7.96243 2 11V13C2 16.0376 4.46243 18.5 7.5 18.5H12V5.5H7.5Z"
                fill="#10b981"
            />
            <path
                d="M12 5.5H16.5C19.5376 5.5 22 7.96243 22 11V13C22 16.0376 19.5376 18.5 16.5 18.5H12V5.5Z"
                fill="white"
            />
            <path
                d="M12 5.5V18.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <circle
                cx="8"
                cy="9"
                r="1.5"
                fill="white"
                opacity="0.8"
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill="white"
                opacity="0.6"
            />
        </svg>
    )
}
