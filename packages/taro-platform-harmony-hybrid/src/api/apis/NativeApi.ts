import { NativeDataChangeListener, SyncCacheProxyHandler } from './NativeApiSyncCacheProxy'
// @ts-ignore
const syncAndRelease = window.MethodChannel && window.MethodChannel.jsBridgeMode({ isAsync: false, autoRelease: true }) || (target => target)
// @ts-ignore
const syncAndNotRelease = window.MethodChannel && window.MethodChannel.jsBridgeMode({ isAsync: false, autoRelease: false }) || (target => target)
// @ts-ignore
const asyncAndRelease = window.MethodChannel && window.MethodChannel.jsBridgeMode({ isAsync: true, autoRelease: true }) || (target => target)
// @ts-ignore
const asyncAndNotRelease = window.MethodChannel && window.MethodChannel.jsBridgeMode({ isAsync: true, autoRelease: false }) || (target => target)

// export let judgeUseAxios = false
export class NativeApi {
  // @ts-ignore
  @(syncAndNotRelease)
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  registerNativeListener (listener: NativeDataChangeListener | null): void {
  }

  // @ts-ignore
  @(syncAndRelease)
  openLocation (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  chooseLocation (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  getWindowInfo (): any {
    return ''
  }

  // @ts-ignore
  @(syncAndRelease)
  getDeviceInfo (): any {
    return ''
  }

  // @ts-ignore
  @(syncAndRelease)
  getSystemInfoSync (): any {
    return ''
  }

  // @ts-ignore
  @(syncAndRelease)
  getSystemSetting (): any {
    return ''
  }

  // @ts-ignore
  @(syncAndRelease)
  getAppBaseInfo (): any {
    return ''
  }

  // @ts-ignore
  @(syncAndRelease)
  getAppAuthorizeSetting (): any {
    return ''
  }

  // @ts-ignore
  @(syncAndRelease)
  navigateToMiniProgram (options: any) {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  setNavigationBarColor (options: any) {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  getMenuButtonBoundingClientRect (): any {
    return ''
  }

  // @ts-ignore
  @(syncAndRelease)
  request (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  saveDataUrlToFile (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  copyFileToSandboxCache (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  startAccelerometer (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  stopAccelerometer (options: any): any {
    return options
  }

  // @ts-ignore
  @(asyncAndNotRelease)
  onAccelerometerChange (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  offAccelerometerChange (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  startCompass (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  stopCompass (options: any): any {
    return options
  }

  // @ts-ignore
  @(asyncAndNotRelease)
  onCompassChange (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  offCompassChange (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  startGyroscope (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  stopGyroscope (options: any): any {
    return options
  }

  // @ts-ignore
  @(asyncAndNotRelease)
  onGyroscopeChange (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  saveImageToPhotosAlbum (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  chooseMediaAssets (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  chooseMediumAssets (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  getVideoInfo (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  getImageInfo (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  compressVideo (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  getLocation (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  openDocument (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  login (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  setNavigationStyle (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  getUserInfo (options: any): any {
    return options
  }

  // @ts-ignore
  @(asyncAndNotRelease)
  openSetting (options: any): any {
    return options
  }

  // @ts-ignore
  @(asyncAndNotRelease)
  getSetting (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  setKeepScreenOn (options: any): any {
    return options
  }

  // @ts-ignore
  @(asyncAndNotRelease)
  onUserCaptureScreen (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  offUserCaptureScreen (options: any): any {
    return options
  }

  // @ts-ignore
  @(asyncAndNotRelease)
  onLocationChange (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  offLocationChange (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  setScreenBrightness (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  getScreenBrightness (options: any): any {
    return options
  }

  // @ts-ignore
  @(asyncAndNotRelease)
  onMemoryWarning (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  offMemoryWarning (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  hideKeyboard (options?: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  onKeyboardHeightChange (options?: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  offKeyboardHeightChange (options?: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  makePhoneCall (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  getSavedFileList (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  removeSavedFile (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  getSavedFileInfo (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  addPhoneContact (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  scanCode (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  vibrateShort (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  vibrateLong (options: any): any {
    return options
  }

  // NativeUpdateManager
  // @ts-ignore
  @(syncAndRelease)
  applyUpdate (): any {}

  // @ts-ignore
  @(syncAndRelease)
  onCheckForUpdate (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  onUpdateFailed (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  onUpdateReady (options: any): any {
    return options
  }

  // @ts-ignore
  @(syncAndRelease)
  downloadFile (options: any): any {
    return options
  }

  // NativeFileSystemManager
  // @ts-ignore
  @(syncAndRelease)
  getFileManager (): any {}

  // @ts-ignore
  @(asyncAndNotRelease)
  access (option: any): any {
    return option
  }

  // @ts-ignore
  @(syncAndRelease)
  saveFile (option: any): any {
    return option
  }

  // @ts-ignore
  @(asyncAndNotRelease)
  getFileInfo (option: any): any {
    return option
  }

  // @ts-ignore
  @(asyncAndNotRelease)
  readFile (option: any): any {
    return option
  }

  // @ts-ignore
  @(syncAndRelease)
  readFileSync (option: any): any {
    return option
  }

  // @ts-ignore
  @(syncAndRelease)
  openAppAuthorizeSetting (option: any): any {
    return option
  }

  // @ts-ignore
  @(syncAndRelease)
  requestSubscribeMessage (option: any): any {
    return option
  }

  // @ts-ignore
  @(syncAndRelease)
  closeBLEConnection (option: any): any {
    return option
  }

  // @ts-ignore
  @(syncAndRelease)
  createBLEConnection (option: any): any {
    return option
  }

  // @ts-ignore
  @(syncAndRelease)
  getBLEDeviceCharacteristics (option: any): any {
    return option
  }

  // @ts-ignore
  @(syncAndRelease)
  getBLEDeviceRSSI (option: any): any {
    return option
  }

  // @ts-ignore
  @(syncAndRelease)
  getBLEDeviceServices (option: any): any {
    return option
  }

  // @ts-ignore
  @(syncAndRelease)
  notifyBLECharacteristicValueChange (option: any): any {
    return option
  }

  // @ts-ignore
  @(asyncAndNotRelease)
  onBLECharacteristicValueChange (option: any): any {
    return option
  }

  // @ts-ignore
  @(asyncAndNotRelease)
  onBLEConnectionStateChange (option: any): any {
    return option
  }

  // @ts-ignore
  @(syncAndRelease)
  readBLECharacteristicValue (option: any): any {
    return option
  }

  // @ts-ignore
  @(syncAndRelease)
  setBLEMTU (option: any): any {
    return option
  }

  // @ts-ignore
  @(syncAndRelease)
  writeBLECharacteristicValue (option: any): any {
    return option
  }

  // @ts-ignore
  @(syncAndRelease)
  closeBluetoothAdapter (option: any): any {
    return option
  }

  // @ts-ignore
  @(syncAndRelease)
  getBluetoothAdapterState (option: any): any {
    return option
  }

  // @ts-ignore
  @(syncAndRelease)
  getBluetoothDevices (option: any): any {
    return option
  }

  // @ts-ignore
  @(syncAndRelease)
  getConnectedBluetoothDevices (option: any): any {
    return option
  }

  // @ts-ignore
  @(syncAndRelease)
  offBluetoothAdapterStateChange (option: any): any {
    return option
  }

  // @ts-ignore
  @(syncAndRelease)
  offBluetoothDeviceFound (option: any): any {
    return option
  }

  // @ts-ignore
  @(asyncAndNotRelease)
  onBluetoothAdapterStateChange (option: any): any {
    return option
  }

  // @ts-ignore
  @(asyncAndNotRelease)
  onBluetoothDeviceFound (option: any): any {
    return option
  }

  // @ts-ignore
  @(syncAndRelease)
  openBluetoothAdapter (option: any): any {
    return option
  }

  // @ts-ignore
  @(syncAndRelease)
  startBluetoothDevicesDiscovery (option: any): any {
    return option
  }

  // @ts-ignore
  @(syncAndRelease)
  stopBluetoothDevicesDiscovery (option: any): any {
    return option
  }

  // @ts-ignore
  @(syncAndRelease)
  getExecStatus (option: any): any {
    // 获取缓存数据
    return option
  }

  // @ts-ignore
  @(asyncAndNotRelease)
  setStorage (option: any): any {
    return option
  }

  // @ts-ignore
  @(asyncAndRelease)
  removeStorage (option: any): any {
    return option
  }

  // @ts-ignore
  @(asyncAndRelease)
  getStorage (option: any): any {
    return option
  }

  // @ts-ignore
  @(asyncAndRelease)
  getStorageInfo (option: any): any {
    return option
  }

  // @ts-ignore
  @(asyncAndRelease)
  clearStorage (option: any): any {
    return option
  }

  @(syncAndRelease)
  callInstance (option: any): any {
    return option
  }

  @(syncAndRelease)
  createInstance (option: any): any {
    return option
  }

  @(syncAndRelease)
  syncAndReleaseInstance (option: any): any {
    return option
  }

  @(asyncAndNotRelease)
  callInstanceAsync (option: any): any {
    return option
  }
}

export interface Status {
  done: boolean
  data: string
  errorMsg: string
}

class CacheStorageProxy {
  private cacheMap: Map<any, any>
  private readonly nativeApi: NativeApi
  private readonly asyncToSyncProxy: any

  constructor (nativeApi: NativeApi) {
    this.nativeApi = nativeApi
    this.cacheMap = new Map<string, any>()
    this.asyncToSyncProxy = new Proxy(nativeApi, new AsyncToSyncProxy(this.nativeApi))
  }

  // @ts-ignore
  get (target: { [x: string]: any }, prop: string) {
    if (prop === 'getStorageSync') {
      return (...args: any[]) => {
        const key = args[0].key
        if (this.cacheMap.has(key)) {
          return { done: true, data: this.cacheMap.get(key), errorMsg: '' }
        } else {
          const status = this.asyncToSyncProxy.getStorageSync({ key })
          if (status.done && status.errorMsg === '') {
            this.cacheMap.set(key, status)
          }
          return status
        }
      }
    }
    if (prop === 'getStorage') {
      return (...args: any[]) => {
        const key = args[0].key
        const fail = args[0].fail
        const success = args[0].success
        if (this.cacheMap.has(key)) {
          success({ errMsg: 'ok', data: this.cacheMap.get(key) })
        } else {
          this.nativeApi.getStorage({
            key: key,
            fail: fail,
            success: (res) => {
              this.cacheMap.set(key, res.data)
              success(res)
            }
          })
        }
      }
    }
    if (prop === 'setStorageSync') {
      return (...args: any[]) => {
        const { key, data } = args[0]
        // 先更新js缓存，同异步原生，TODO 考虑失败的情况
        this.cacheMap.set(key, data)
        this.nativeApi.setStorage({
          key: key,
          data: data,
          fail: () => {},
          success: () => {}
        })
      }
    }
    if (prop === 'setStorage') {
      return (...args: any[]) => {
        const key = args[0].key
        const data = args[0].data
        this.cacheMap.set(key, data)
        // @ts-ignore
        this.nativeApi.setStorage({ key: key, data: data })
      }
    }
    if (prop === 'removeStorageSync') {
      return (...args: any[]) => {
        const { key } = args[0]
        // 先更新缓存，再同步原生
        this.cacheMap.delete(key)
        this.nativeApi.removeStorage({ key: key })
      }
    }
    if (prop === 'removeStorage') {
      return (...args: any[]) => {
        const { key } = args[0]
        // 先更新缓存，再同步原生
        this.cacheMap.delete(key)
        // @ts-ignore
        this.nativeApi.removeStorage({ key: key })
      }
    }
    return (...args: any[]) => {
      return this.asyncToSyncProxy[prop](...args)
    }
  }
}

class AsyncToSyncProxy {
  private readonly nativeApi: NativeApi
  private readonly STATUS: Status = { done: false, data: '', errorMsg: `search timeout` }
  private methods = ['setStorageSync', 'removeStorageSync', 'getStorageSync', 'getStorageInfoSync', 'clearStorageSync']

  constructor (nativeApi: NativeApi) {
    this.nativeApi = nativeApi
  }

  get (target: { [x: string]: any }, prop: string) {
    if (this.methods.includes(prop)) {
      return (...args: any[]) => {
        const asyncFunc = prop.substring(0, prop.length - 'Sync'.length)
        this.nativeApi[asyncFunc](...args)

        let count = 0
        while (count < 20000) {
          count++
          if (count % 2000 === 0) {
            const status = this.nativeApi.getExecStatus({ method: prop, key: args[0].key })
            if (status.done || status.errorMsg) {
              return status
            }
          }
        }
        return this.STATUS
      }
    }
    return target[prop]
  }
}

// class HybridProxy {
//   // private readonly useAxios: boolean
//   private readonly useOsChannel: boolean
//   private readonly cacheProxy: any
//   // private readonly requestApi = 'request'
//
//   constructor (useOsChannel: boolean, nativeApi: NativeApi) {
//     // this.useAxios = useAxios
//     this.useOsChannel = useOsChannel
//     this.cacheProxy = new Proxy(nativeApi, new CacheStorageProxy(nativeApi))
//   }
//
//   get (_target: any, prop: string) {
//     return (...args: any) => {
//       // if (this.useAxios && prop === this.requestApi) {
//       //   judgeUseAxios = this.useAxios
//       //   // @ts-ignore
//       //   return new RequestTask(...args)
//       // }
//       if (this.useOsChannel && osChannelApi.hasOwnProperty(prop)) {
//         return osChannelApi[prop](...args)
//       }
//       return this.cacheProxy[prop](...args)
//     }
//   }
// }

const nativeApi = new NativeApi()
const cacheNativeApi = new Proxy(nativeApi, new SyncCacheProxyHandler(nativeApi))
const native = new Proxy(cacheNativeApi, new CacheStorageProxy(cacheNativeApi)) // 第一个false是默认走jsb，true是走纯js， 第二个false是不走osChannel
export default native
