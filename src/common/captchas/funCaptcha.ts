import { FunCaptcha } from "../../types/CaptchaTypes/FunCaptcha.js";
import { CaptchaBase } from "./captchaBase.js";

/**
* Represents the FunCaptcha Proxyless Task Class.
* @extends CaptchaBase
*/
export class FunCaptchaTaskProxyless extends CaptchaBase {
  public websiteUrl: string;
  public websitePublicKey: string;
  public funcaptchaApiJSSubdomain?: string;
  public data?: string;

  /**
  * Constructs the object type FunCaptchaTaskProxyless.
  * @param {FunCaptcha}
  */
  public constructor({
    type,
    websiteURL,
    websitePublicKey,
    funcaptchaApiJSSubdomain,
    data
  }: FunCaptcha) {
    super(type);
    this.websiteUrl = websiteURL;
    this.websitePublicKey = websitePublicKey;
    this.data = data
    this.funcaptchaApiJSSubdomain = funcaptchaApiJSSubdomain;
  }
}
