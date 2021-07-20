import { Splash, Dashboard } from './components'

export const routes = {
  root: '/splash',
  routes: [
    {
      path: '/splash',
      component: Splash,
    },
    {
      path: '/dashboard',
      component: Dashboard,
    },
  ],
}
