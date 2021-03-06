import { Lightning, Router, Settings } from '@lightningjs/sdk'

export class Splash extends Lightning.Component {
  static _template() {
    const { w, h, clearColor } = Settings.get('app', 'stage')
    return {
      rect: true,
      x: 0,
      y: 0,
      w,
      h,
      color: clearColor,
      MyText: {
        x: w => w / 2,
        y: h => h / 2,
        mount: 0.5,
        text: {
          text: 'Press "Enter" to continue...',
        },
      },
    }
  }

  _handleEnter() {
    Router.navigate('dashboard')
  }
}
