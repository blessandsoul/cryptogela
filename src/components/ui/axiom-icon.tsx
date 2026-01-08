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
    {/* Triangle - top part */}
    <path d="M12 4L4 12H20L12 4Z" fill="currentColor" />
    {/* Trapezoid - bottom part */}
    <path d="M4 15H20L18 20H6L4 15Z" fill="currentColor" />
  </svg>
)

export { AxiomIcon }
