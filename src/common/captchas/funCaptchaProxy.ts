import { FunCaptchaProxy } from "../../types/CaptchaTypes/FunCaptchaProxy.js";
import { FunCaptchaTaskProxyless } from "./funCaptcha.js";

/**
* Represents the FunCaptcha Proxy Task Class.
*/
export class FunCaptchaTask extends FunCaptchaTaskProxyless {
  public userAgent: string;
  public cookies?: string;
  public proxyType: string;
  public proxyAddress: string;
  public proxyPort: number;
  public proxyLogin?: string;
  public proxyPassword?: string;

  /**
  * Constructs the object type FunCaptcha Task. 
  * @param {FunCaptchaProxy}
  */
  public constructor({
    type,
    websiteURL,
    funcaptchaApiJSSubdomain,
    websitePublicKey,
    data,
    proxyType,
    proxyAddress,
    proxyPort,
    proxyLogin,
    proxyPassword,
    userAgent,
    cookies
  }: FunCaptchaProxy) {
    super({
      type,
      websiteURL,
      websitePublicKey,
      funcaptchaApiJSSubdomain,
      data
    });
    this.proxyType = proxyType;
    this.proxyAddress = proxyAddress;
    this.proxyPort = proxyPort;
    this.proxyLogin = proxyLogin;
    this.proxyPassword = proxyPassword;
    this.userAgent = userAgent;
    this.cookies = cookies;
  }
}
