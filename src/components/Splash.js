import { Lightning, Router } from '@lightningjs/sdk'

export class Splash extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 500,
      h: 500,
      // MyText: {
      text: {
        text: 'Splash screen',
      },
      // },
    }
  }

  _handleEnter() {
    Router.navigate('/dashboard')
  }

  // _init() {
  //   this.tag('MyText')
  // }
}
