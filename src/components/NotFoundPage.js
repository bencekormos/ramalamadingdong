import { Lightning, Router, Settings } from '@lightningjs/sdk'

export class NotFoundPage extends Lightning.Component {
  static _template() {
    const { w, h, clearColor } = Settings.get('app', 'stage')
    return {
      rect: true,
      x: 0,
      y: 0,
      w,
      h,
      color: clearColor,
      TextWrapper: {
        x: w => w / 2,
        y: h => h / 2,
        mount: 0.5,
        Label: {
          text: {
            text: 'Page not found',
          },
        },
      },
    }
  }

  _handleEnter() {
    Router.navigate('splash')
  }
}
