interface BorderFrameProps {
  children: React.ReactNode
  className?: string
  color?: 'black' | 'white'
}

function BorderFrame({ children, className = '', color = 'black' }: BorderFrameProps) {
  return (
    <div
      className={`relative border border-${color} ${className}`}
      style={{ borderColor: color === 'black' ? '#000' : '#F9F8FF' }}>
      {/* Corner Boxes */}
      <div
        className={`absolute -left-1 -top-1 h-[6px] w-[6px] bg-[#4A3880] border-${color} border`}
        style={{ borderColor: color === 'black' ? '#000' : '#F9F8FF' }}
      />
      <div
        className={`absolute -right-1 -top-1 h-[6px] w-[6px] bg-[#4A3880] border-${color} border`}
        style={{ borderColor: color === 'black' ? '#000' : '#F9F8FF' }}
      />
      <div
        className={`absolute -bottom-1 -left-1 h-[6px] w-[6px] bg-[#4A3880] border-${color} border`}
        style={{ borderColor: color === 'black' ? '#000' : '#F9F8FF' }}
      />
      <div
        className={`absolute -bottom-1 -right-1 h-[6px] w-[6px] bg-[#4A3880] border-${color} border`}
        style={{ borderColor: color === 'black' ? '#000' : '#F9F8FF' }}
      />

      {/* Content */}
      <div className='p-2'>{children}</div>
    </div>
  )
}

export default BorderFrame
