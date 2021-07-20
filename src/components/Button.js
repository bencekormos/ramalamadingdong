import { Lightning } from '@lightningjs/sdk'

export class Button extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 200,
      h: 50,
      color: 0xffff0000,
      alpha: 0.8,
      Label: {
        text: {
          text: 'Button',
        },
      },
    }
  }

  _focus() {
    this.patch({
      color: 0xffffff00,
      alpha: 1,
    })
  }

  _unfocus() {
    this.patch({
      color: 0xffff0000,
      alpha: 0.8,
    })
  }
}
