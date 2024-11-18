export default function Heading({
  children,
  className,
}: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`text-2xl md:text-5xl font-bold text-black !leading-normal tracking-wide ${className}`}>
      {children}
    </h2>
  )
}
