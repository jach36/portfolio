const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C", "SQL", "JavaScript", "TypeScript", "HTML/CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React",
      "Spring Boot",
      "Node.js",
      "Next.js",
      "NumPy",
      "SciPy",
      "Scikit-learn",
    ],
  },
  {
    title: "AI & Computer Vision",
    skills: [
      "Machine Learning",
      "Computer Vision",
      "YOLO",
      "MobileSAM",
      "MNE",
      "Signal Processing",
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "Docker",
      "PostgreSQL",
      "Git",
      "Linux",
      "JFrog Artifactory",
      "REST APIs",
    ],
  },
];

export default function About() {
  return (
    <section
        id="about"
        className="max-w-6xl mx-auto px-8 py-16"
        >
        <div className="border-t border-outline pt-20">
            <p className="text-muted mb-3">
            A little about me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            About
            </h2>

            {/* About text */}
            <div className="mt-12 max-w-3xl">
            <p className="text-xl text-copy leading-relaxed">
                I'm a Computer Science student at George Mason University
                interested in building software that combines strong engineering
                with intelligent systems.
            </p>

            <p className="mt-6 text-lg text-copy leading-relaxed">
                My experience spans full-stack development, machine learning,
                computer vision, and signal processing. I've worked on
                professional software systems as well as research-oriented
                projects involving underwater imagery and EEG data.
            </p>
            </div>

            {/* Skills */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {skillGroups.map((group) => (
                <div key={group.title} className="rounded-2xl border border-outline bg-card p-6">
                <h3 className="font-semibold mb-4">
                    {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                    <span
                        key={skill}
                        className="text-sm bg-chip px-3 py-1.5 rounded-full"
                    >
                        {skill}
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

