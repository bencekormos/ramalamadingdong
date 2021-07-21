import { Lightning, Log, Router, Settings } from '@lightningjs/sdk'
import { Button } from './Button'
import { half } from '../utils/half'

export class Dashboard extends Lightning.Component {
  static _template() {
    const { w, h } = Settings.get('app', 'stage')
    const rect = true
    const fontSize = 40
    return {
      rect,
      w,
      h,
      color: 0x88000000,
      flex: {
        direction: 'row',
      },
      Content: {
        rect,
        h,
        color: 0xffff0000,
        flexItem: {
          alignSelf: 'stretch',
          grow: 1,
        },
        ContentText: {
          x: half,
          y: half,
          mount: 0.5,
          text: {
            text: 'Epic content',
            fontFace: 'StruckBase',
            fontSize,
          },
        },
        Buttons: {
          rect,
          x: half,
          y: h => h - h * 0.05,
          w: 0,
          mountX: 0.5,
          mountY: 1,
          flex: {
            direction: 'row',
          },
          color: 0xff0000ff,
          Button1: {
            type: Button,
            flexItem: {
              margin: 10,
            },
            signals: {
              onEnter: '_onButtonEnter',
            },
          },
          Button2: {
            type: Button,
            flexItem: {
              margin: 10,
            },
            signals: {
              onEnter: '_onButtonEnter',
            },
          },
          Button3: {
            type: Button,
            flexItem: {
              margin: 10,
            },
            signals: {
              onEnter: '_onButtonEnter',
            },
          },
          Button4: {
            type: Button,
            flexItem: {
              margin: 10,
            },
            signals: {
              onEnter: '_onButtonEnter',
            },
            // mountX: -3,
          },
        },
      },
      Sidebar: {
        rect,
        w: 500,
        h,
        color: 0xff000000,
        SidebarText: {
          x: half,
          y: half,
          mount: 0.5,
          text: {
            text: 'Epic sidebar',
            fontFace: 'StruckBase',
            fontSize,
          },
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

  _handleEscape() {
    Router.navigate('splash')
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
