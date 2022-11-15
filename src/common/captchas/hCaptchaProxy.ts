import { HCaptchaProxy } from "../../types/CaptchaTypes/HCaptchaProxy.js";
import { HCaptchaTaskProxyless } from "./hCaptcha.js";

/**
* Represents the HCaptcha Task Class.
* @extends HCaptchaTaskProxyless
*/
export class HCaptchaTask extends HCaptchaTaskProxyless {
  public proxyType: string;
  public proxyAddress: string;
  public proxyPort: number;
  public proxyLogin?: string;
  public proxyPassword?: string;

  /**
  * Constructs the object type HCaptchaTask.
  * @param {HCaptchaProxy}
  */
  public constructor({
    type,
    websiteURL,
    websiteKey,
    isInvisible,
    data,
    userAgent,
    cookies,
    proxyType,
    proxyAddress,
    proxyPort,
    proxyLogin,
    proxyPassword,
  }: HCaptchaProxy) {
    super({
      type,
      websiteURL,
      websiteKey,
      isInvisible,
      data,
      userAgent,
      cookies
    });
    this.proxyType = proxyType;
    this.proxyAddress = proxyAddress;
    this.proxyPort = proxyPort;
    this.proxyLogin = proxyLogin;
    this.proxyPassword = proxyPassword;
  }
}
