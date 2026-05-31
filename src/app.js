import './core/theme/global.css';
import './core/theme/infinity.css';
import { Router } from './core/router.js';

function bootstrap() {
  const router = new Router({
    root: document.getElementById('app-root'),
    routes: {
      '/': () => import('./features/dashboard/index.js'),
    },
  });

  router.start();
}

bootstrap();
