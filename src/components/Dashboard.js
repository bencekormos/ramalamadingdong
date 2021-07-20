import { Lightning, Log, Router } from '@lightningjs/sdk'
import { Button } from './Button'

export class Dashboard extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1000,
      h: 500,
      color: 0x88000000,
      Text: {
        text: {
          text: 'Dashboard',
          fontFace: 'StruckBase',
          fontSize: 26,
        },
      },
      Buttons: {
        x: w => w / 2,
        y: 50,
        w: 800,
        mountX: 0.5,
        Button1: {
          type: Button,
          mountX: 0,
          signals: {
            onEnter: '_onButtonEnter',
          },
        },
        Button2: {
          type: Button,
          signals: {
            onEnter: '_onButtonEnter',
          },
          mountX: -1,
        },
        Button3: {
          type: Button,
          signals: {
            onEnter: '_onButtonEnter',
          },
          mountX: -2,
        },
        Button4: {
          type: Button,
          signals: {
            onEnter: '_onButtonEnter',
          },
          mountX: -3,
        },
      },
    }
  }

  _getFocused() {
    return this.tag('Buttons').children[this.index]
  }

  _init() {
    this.index = 0
  }

  _onButtonEnter() {
    Log.info(...arguments)
  }

  _handleBack() {
    Router.navigate('/splash')
  }

  _handleLeft() {
    const nextIndex = this.index - 1
    this.index = nextIndex >= 0 ? nextIndex : this.tag('Buttons').children.length - 1
  }

  _handleRight() {
    const nextIndex = this.index + 1
    this.index = this.tag('Buttons').children.length > nextIndex ? nextIndex : 0
  }
}
