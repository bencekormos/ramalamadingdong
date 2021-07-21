import { Lightning, Settings } from '@lightningjs/sdk'

export class ErrorPage extends Lightning.Component {
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
        Text1: {
          text: {
            text: 'Error loading page',
          },
        },
        Text2: {
          text: {
            text: 'Press "Back" to go back to the previous page',
            fontSize: 16,
          },
        },
      },
    }
  }
}
