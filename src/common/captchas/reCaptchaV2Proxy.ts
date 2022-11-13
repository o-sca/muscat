import { NoCaptchaTaskProxyless } from "./reCaptchaV2.js";
import { ReCaptchaV2Proxy } from "../../types/CaptchaTypes/ReCaptchaV2Proxy.js";

/**
* Represents the ReCaptcha V2 Proxy Task Class.
* @extends ReCaptchaV2Task
*/
export class NoCaptchaTask extends NoCaptchaTaskProxyless {
  public proxyType: string;
  public proxyAddress: string;
  public proxyPort: number;
  public proxyLogin?: string;
  public proxyPassword?: string;

  /**
  * Constructs the object type RecaptchaV2ProxyTask.
  * @param {ReCaptchaV2Proxy}
  */
  public constructor({
    type,
    websiteURL,
    websiteKey,
    recaptchaDataSValue,
    proxyType,
    proxyAddress,
    proxyPort,
    proxyLogin,
    proxyPassword,
    cookies,
  }: ReCaptchaV2Proxy) {
    super({
      type: type,
      websiteURL: websiteURL,
      websiteKey: websiteKey,
      recaptchaDataSValue: recaptchaDataSValue,
      cookies: cookies
    });
    this.proxyType = proxyType;
    this.proxyAddress = proxyAddress;
    this.proxyPort = proxyPort;
    this.proxyLogin = proxyLogin;
    this.proxyPassword = proxyPassword;
  }
}
