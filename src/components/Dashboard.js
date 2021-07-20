import { Lightning, Router } from '@lightningjs/sdk'
import { Button } from './Button'

export class Dashboard extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 500,
      h: 500,
      color: 0x88000000,
      Text: {
        text: {
          text: 'Dashboard',
          fontFace: 'StruckBase',
          fontSize: 26,
        },
      },
      Button1: {
        type: Button,
      },
      Button2: {
        type: Button,
        // x: 20,
        // y: 10,
        mount: -1,
      },
    }
  }

  _handleBack() {
    Router.navigate('/splash')
  }

  // _init() {
  //   this.tag('Text')
  //   this.tag('Button')
  // }
}
