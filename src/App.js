import { Router, Utils } from '@lightningjs/sdk'
import { routes } from './routes'

export default class Ramalamadingdong extends Router.App {
  static getFonts() {
    return [
      { family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') },
      { family: 'StruckBase', url: Utils.asset('fonts/Struck-Base.otf') },
    ]
  }

  _setup() {
    Router.startRouter(routes)
  }
}
