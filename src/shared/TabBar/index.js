const tabs = [
  { label: 'HOME', path: '/' },
  { label: 'BUILD', path: '/workout' },
  { label: 'PROFILE', path: '/profile' },
];

function setActiveTab(nav, path) {
  nav.querySelectorAll('button').forEach((button) => {
    button.classList.toggle('active', button.dataset.path === path);
  });
}

export function renderTabBar(container) {
  const nav = document.createElement('nav');
  nav.className = 'tab-bar';
  nav.setAttribute('aria-label', 'Primary navigation');

  tabs.forEach(({ label, path }) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.path = path;
    button.textContent = label;
    nav.append(button);
  });

  setActiveTab(nav, window.location.pathname);

  nav.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-path]');

    if (!button || !nav.contains(button)) {
      return;
    }

    setActiveTab(nav, button.dataset.path);
    window.history.pushState({}, '', button.dataset.path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  });

  window.addEventListener('popstate', () => {
    setActiveTab(nav, window.location.pathname);
  });

  container.append(nav);
}
