export default function PageHeading({ children }) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-8 md:mb-12">
      <h1 className="text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        {children}
      </h1>
    </section>
  )
}
