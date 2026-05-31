export function init(container) {
  container.innerHTML = `
    <main
      class="dashboard-shell"
      aria-labelledby="dashboard-title"
      style="display: grid; min-height: 100vh; min-height: 100dvh; place-items: center; padding: 2rem; text-align: center;"
    >
      <h1
        id="dashboard-title"
        class="dashboard-title"
        style="background: var(--infinity-gradient); -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; font-size: clamp(3rem, 18vw, 7rem); font-weight: 900; letter-spacing: -0.08em; line-height: 0.9; text-shadow: 0 0 32px rgba(0, 210, 255, 0.28), 0 0 64px rgba(154, 75, 255, 0.24), 0 0 96px rgba(255, 0, 127, 0.2);"
      >
        You vs. Gravity
      </h1>
    </main>
  `;
}
