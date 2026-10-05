const experiences = [
  {
    company: "L3Harris Technologies",
    role: "Software Engineering Intern",
    date: "May 2026 — Aug 2026",
    description:
      "Built a full-stack constellation modeling application with React, Spring Boot, and PostgreSQL, while containerizing the development environment for an 11-person engineering team.",
    technologies: [
      "React",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "JFrog Artifactory",
      "Linux",
      "REST APIs",
    ],
  },
  {
    company: "College of William & Mary — OceanicAI",
    role: "AI Engineering Intern",
    date: "Jan 2026 — May 2026",
    description:
      "Developed a computer vision pipeline using YOLOv11 and MobileSAM to detect, segment, and estimate the physical size of sea scallops from underwater survey imagery.",
    technologies: [
      "Python",
      "YOLOv11",
      "MobileSAM",
      "Computer Vision",
      "PyTorch",
    ],
  },
  {
    company: "George Mason University",
    role: "Undergraduate Teaching Assistant",
    date: "Aug 2024 — May 2025",
    description:
      "Supported more than 500 students in introductory computer science through labs, debugging, and programming instruction.",
    technologies: [
      "Python",
      "Teaching",
      "Debugging",
    ],
  },
];

export default function Experience() {
  return (
    <section
        id="experience"
        className="max-w-6xl mx-auto px-8 py-16"
        >
        <div className="rounded-3xl border border-panel-border bg-panel p-8 md:p-12">
        <p className="text-muted mb-3">
            Where I've worked
        </p>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
            Experience
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((experience) => (
            <div
                key={experience.company}
                className="rounded-2xl border border-outline bg-card p-6 flex flex-col"
            >
                <p className="text-sm text-muted">
                {experience.date}
                </p>

                <h3 className="text-xl font-semibold mt-4">
                {experience.company}
                </h3>

                <p className="text-copy mt-1">
                {experience.role}
                </p>

                <p className="text-copy leading-relaxed mt-6">
                {experience.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                {experience.technologies.map((technology) => (
                    <span
                    key={technology}
                    className="text-sm bg-chip px-3 py-1 rounded-full"
                    >
                    {technology}
                    </span>
                ))}
                </div>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}

