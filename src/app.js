import { Router } from './core/router.js';
import { renderTabBar } from './shared/TabBar/index.js';

function bootstrap() {
  renderTabBar(document.body);

  const router = new Router({
    root: document.getElementById('app-root'),
    routes: {
      '/': () => import('./features/dashboard/index.js'),
      '/workout': () => import('./features/build/index.js'),
      '/profile': () => import('./features/profile/index.js'),
    },
  });

  router.start();
}

bootstrap();
