export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-8 py-24"
    >
      <div className="border-t border-outline pt-20">
        <p className="text-muted mb-4">Get in touch</p>

        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Let's connect.
        </h2>

        <p className="mt-6 text-lg text-copy max-w-xl leading-relaxed">
          I'm interested in software engineering opportunities and projects
          involving full-stack development, machine learning, and intelligent systems.
        </p>

        <div className="flex flex-wrap items-center gap-6 mt-8">
          <a
            href="mailto:jchung36@gmu.edu"
            className="px-5 py-2.5 bg-contrast text-on-contrast rounded-lg font-medium hover:bg-button-hover transition-colors"
          >
            Email Me ↗
          </a>

          <a
            href="https://www.linkedin.com/in/jiwoo-chung36"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-contrast transition-colors"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/jach36"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-contrast transition-colors"
          >
            GitHub ↗
          </a>
        </div>

        <p className="mt-20 text-sm text-muted">
          © 2026 Jiwoo Chung
        </p>
      </div>
    </section>
  );
}

