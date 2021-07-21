import { Lightning } from '@lightningjs/sdk'
import { half } from '../utils/half'

export class Button extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      alpha: 0.8,
      texture: Lightning.Tools.getRoundRect(150, 75, 5),
      Label: {
        x: half,
        y: half,
        mountX: 0.5,
        mountY: 0.4275,
        color: 0xff000000,
        text: {
          text: 'Button',
        },
      },
    }
  }

  _focus() {
    const alpha = 1
    this.patch({ alpha })
  }

  _unfocus() {
    const alpha = 0.8
    this.patch({ alpha })
  }

  _handleEnter() {
    this.signal('onEnter', this.id)
  }
}
