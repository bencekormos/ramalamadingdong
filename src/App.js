/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Lightning, Utils } from '@lightningjs/sdk'

export default class App extends Lightning.Component {
  static getFonts() {
    return [
      { family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') },
      { family: 'StruckBase', url: Utils.asset('fonts/Struck-Base.otf') },
    ]
  }

  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        color: 0xfffbb03b,
        src: Utils.asset('images/background.png'),
      },
      Logo: {
        mountX: 0.5,
        mountY: 0.5,
        x: 960,
        y: 540,
        src: Utils.asset('images/logo.png'),
      },
      Text: {
        mount: 0.5,
        x: 960,
        y: 540,
        text: {
          text: "Let's start Building!",
          fontFace: 'StruckBase',
          fontSize: 34,
          textColor: 0xffffffff,
        },
      },
      Text2: {
        mountX: -1,
        // x: 960,
        // y: 720,
        text: {
          text: "Let's start Building!",
          fontFace: 'StruckBase',
          fontSize: 34,
          textColor: 0xbbffffff,
        },
      },
    }
  }

  _init() {
    this.tag('Text2')
      .animation({
        duration: 2,
        repeat: -1,
        actions: [
          {
            t: '',
            p: 'color',
            v: { 0: { v: 0xffffffff }, 0.5: { v: 0x00000000 }, 0.8: { v: 0xffffffff } },
          },
        ],
      })
      .start()
  }
}
