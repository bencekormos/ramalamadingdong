import { Lightning } from '@lightningjs/sdk'

export class Button extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 200,
      h: 50,
      color: 0xffff0000,
      Label: {
        text: {
          text: 'Button',
        },
      },
    }
  }
}
