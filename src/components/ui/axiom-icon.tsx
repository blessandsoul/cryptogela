import React from 'react'

type AxiomIconProps = React.SVGProps<SVGSVGElement>

const AxiomIcon: React.FC<AxiomIconProps> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Triangle - top part (pointing up) */}
    <path d="M12 4L20 12H4L12 4Z" fill="currentColor" />
    {/* Trapezoid - bottom part (wider at bottom) */}
    <path d="M6 14H18L20 20H4L6 14Z" fill="currentColor" />
  </svg>
)

export { AxiomIcon }
