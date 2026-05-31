export class Router {
  constructor({ root, routes }) {
    if (!root) {
      throw new Error('Router requires a root element.');
    }

    this.root = root;
    this.routes = routes;
    this.handleRouteChange = this.handleRouteChange.bind(this);
  }

  start() {
    window.addEventListener('popstate', this.handleRouteChange);
    this.handleRouteChange();
  }

  stop() {
    window.removeEventListener('popstate', this.handleRouteChange);
  }

  async handleRouteChange() {
    const path = window.location.pathname;
    const loader = this.routes[path] ?? this.routes['/'];

    if (!loader) {
      this.root.innerHTML = '';
      return;
    }

    const module = await loader();

    if (typeof module.init !== 'function') {
      throw new Error(`Route module for "${path}" must export an init(container) function.`);
    }

    this.root.replaceChildren();
    module.init(this.root);
  }
}
