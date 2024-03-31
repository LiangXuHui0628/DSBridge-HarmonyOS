import { Args, JavaScriptProxy, OnCloseWindowListener, OnReturnValue } from './Entity2';

/**
 * web组件控制器的api代理接口，这里不能使用ohos的相关属性
 */
export interface IWebViewControllerProxy {
  runJavaScript(script: string): Promise<string>

  /**
   * @deprecated
   * @param object
   * @param name
   * @param methodList
   */
  registerJavaScriptProxy(object: object, name: string, methodList: Array<string>): void;

  refresh(): void;

}

export interface IAttachProxy {
  setWebViewControllerProxy(controller: IWebViewControllerProxy)

  javaScriptProxy(): JavaScriptProxy
}

export interface IBaseBridge {
  destroy(): void;

  callJs(method: string, args?: Args[], jsReturnValueHandler?: OnReturnValue): void

  setClosePageListener(listener: OnCloseWindowListener): void

  hasJavascriptMethod(method: string): Promise<boolean>

  callHandler(method: string, args?: Args[], jsReturnValueHandler?: OnReturnValue): void
}

export interface IBridge extends IAttachProxy, IBaseBridge {}
