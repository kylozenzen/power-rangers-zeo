import './core/theme/global.css';
import './core/theme/infinity.css';
import { initDB } from './core/storage/db.js';
import { Router } from './core/router.js';
import { renderTabBar } from './shared/TabBar/index.js';

async function bootstrapApp() {
  renderTabBar(document.body);

  await initDB();

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

bootstrapApp();
