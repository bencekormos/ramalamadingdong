import { Lightning, Router } from '@lightningjs/sdk'
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
        Button1: {
          type: Button,
        },
        Button2: {
          type: Button,
          mount: -1,
        },
        Button3: {
          type: Button,
          mount: -2,
        },
        Button4: {
          type: Button,
          mount: -3,
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

  _handleBack() {
    Router.navigate('/splash')
  }

  _handleUp() {
    const nextIndex = this.index + 1
    this.index = this.tag('Buttons').children.length > nextIndex ? nextIndex : 0
  }

  _handleDown() {
    const nextIndex = this.index - 1
    this.index = nextIndex >= 0 ? nextIndex : this.tag('Buttons').children.length - 1
  }
}
