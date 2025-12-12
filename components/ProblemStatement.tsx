export default function ProblemStatement() {
  return (
    <section className="py-24 relative">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-relaxed">
            You&apos;re brilliant at{" "}
            <span className="text-cyan text-glow-cyan">strategy</span>.
            <br className="hidden sm:block" />
            Let LU Teams handle the{" "}
            <span className="text-purple text-glow-purple">people dynamics</span>.
          </p>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
    </section>
  );
}