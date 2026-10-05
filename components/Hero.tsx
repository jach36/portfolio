export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-8 min-h-[85vh] flex items-center">

      <div className="max-w-5xl">

        <p className="text-lg mb-5 text-copy">
          Hi, I'm Jiwoo Chung.
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
          I build software
          <br />
          and intelligent systems.
        </h1>

        <p className="mt-8 text-lg md:text-xl max-w-2xl text-copy leading-relaxed">
          Computer Science student at George Mason University with
          experience building full-stack applications, computer vision
          systems, and machine learning pipelines.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-10">
          {/* buttons */}
        </div>

      </div>

    </section>
  );
}

