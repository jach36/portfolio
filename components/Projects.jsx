const projects = [
  {
    title: "Scallop Population Analysis",
    description:
      "Computer vision pipeline for detecting, segmenting, and estimating the physical size of sea scallops from multi-year underwater survey imagery.",
    image: "/projects/scallop/detection_example.png",
    technologies: ["Python", "YOLOv11", "MobileSAM", "Computer Vision"],
    github: "https://github.com/jach36/Scallop-Population-CV-Project",
    award: "Best Project Runner-Up · $1,000 Award",
  },

  {
    title: "BCI Motor Imagery Classification",
    description:
      "EEG signal processing and machine learning pipeline using CSP and LDA to classify motor imagery from 68-channel brain-computer interface recordings.",
    image: "/projects/bci/01_mu_beta_activity.png",
    technologies: [
      "Python",
      "NumPy",
      "SciPy",
      "Scikit-learn",
      "MNE",
    ],
    github: "https://github.com/jach36/EEG-mindstorm-bci",
  },

  {
    title: "BoS & FVG Trading Strategy",
    description:
      "Algorithmic trading strategy using multi-timeframe Break of Structure and Fair Value Gap detection with automated entries, exits, and risk management.",
    image: null,
    technologies: ["Pine Script", "TradingView", "Algorithmic Trading"],
    github: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-8 py-16"
    >
      <div className="rounded-3xl border border-panel-border bg-panel p-6 md:p-8">
        <p className="text-muted mb-3">
          What I&apos;ve built
        </p>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col min-w-0 rounded-2xl border border-outline bg-card p-6"
            >

              {/* Title */}
              <h3 className="text-2xl font-bold tracking-tight md:min-h-[96px]">
                {project.title}
              </h3>

              {/* Award */}
              <div className="min-h-[24px]">
                {project.award && (
                  <p className="text-sm font-semibold">
                    {project.award}
                  </p>
                )}
              </div>


              {/* Image */}
              <div className="mt-5 overflow-hidden rounded-2xl bg-chip border border-outline">
                {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="w-full aspect-[16/9] object-cover"
                />
                ) : (
                  <div className="w-full aspect-[16/9] flex flex-col items-center justify-center gap-3 text-copy p-4 text-center">
                    <svg viewBox="0 0 120 48" className="w-28 h-12" fill="none" aria-hidden="true">
                      <path d="M4 44H116M4 4V44" stroke="currentColor" opacity="0.3" />
                      <path d="M10 35L26 28L40 33L57 19L72 24L91 10L110 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm font-medium">Trading strategy</span>
                    <span className="text-xs text-muted">Preview coming soon</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="mt-6 text-copy text-base leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="text-sm text-copy bg-chip px-3 py-1 rounded-full"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* GitHub */}
              {project.github !== "#" && (
                <div className="mt-auto pt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-contrast transition-colors"
                  >
                    View on GitHub ↗
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
