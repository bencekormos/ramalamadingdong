import { Launch } from '@lightningjs/sdk'
import App from './App.js'

export default function(appSettings, platformSettings) {
  appSettings.stage.w = window.innerWidth
  appSettings.stage.h = (window.innerWidth / 16) * 9
  appSettings.stage.useImageWorker = false
  console.log(appSettings.stage)
  return Launch(App, appSettings, platformSettings)
}
