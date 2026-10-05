"use client";

export default function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const theme = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = theme;
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-outline bg-chip px-4 py-2 text-sm hover:text-contrast transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      <span className="theme-label-light">Light mode</span>
      <span className="theme-label-dark">Dark mode</span>
    </button>
  );
}
