import { Splash, Dashboard, NotFoundPage, ErrorPage } from './components'

export const routes = {
  root: 'splash',
  routes: [
    {
      path: 'splash',
      component: Splash,
    },
    {
      path: 'dashboard',
      component: Dashboard,
    },
    {
      path: '*',
      component: NotFoundPage,
    },
    {
      path: '!',
      component: ErrorPage,
    },
  ],
}
