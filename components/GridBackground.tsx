'use client'

const GridBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* DARKER, MORE VISIBLE GRID 
         - Adjusted stroke color to #333 (darker gray)
         - Increased stroke width slightly
         - Removed heavy masks to let the grid shine through
      */}
      <div 
        className="absolute inset-0 opacity-100" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* GRADIENT OVERLAY 
          This creates a 'spotlight' effect, making the grid 
          sharp in the center and fading toward the edges.
      */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.8) 100%)'
        }}
      />
    </div>
  )
}

export default GridBackground