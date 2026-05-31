export function init(container) {
  container.innerHTML = `
    <main
      class="profile-shell"
      aria-labelledby="profile-title"
      style="display: grid; min-height: 100vh; min-height: 100dvh; place-items: center; padding: 2rem 2rem 6rem; text-align: center;"
    >
      <div
        id="profile-title"
        style="background: var(--infinity-gradient); -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; font-size: clamp(2rem, 12vw, 4.5rem); font-weight: 900; letter-spacing: -0.06em; line-height: 1; text-shadow: 0 0 32px rgba(0, 210, 255, 0.28), 0 0 64px rgba(154, 75, 255, 0.24), 0 0 96px rgba(255, 0, 127, 0.2);"
      >
        Athlete Profile coming soon
      </div>
    </main>
  `;
}
