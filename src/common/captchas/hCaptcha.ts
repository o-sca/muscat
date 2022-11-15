import { HCaptcha } from "../../types/CaptchaTypes/HCaptcha.js";
import { CaptchaBase } from "./captchaBase.js"

/**
* Represents the HCaptcha Proxyless Task Class.
* @extends CaptchaBase
*/
export class HCaptchaTaskProxyless extends CaptchaBase {
  public websiteUrl: string;
  public websiteKey: string;
  public isInvisible?: boolean;
  public data?: string;
  public userAgent?: string;
  public cookies?: string;

  /**
  * Constructs the object type HCaptchaProxylessTask.
  * @param {HCaptcha}
  */
  public constructor({
    type,
    websiteURL,
    websiteKey,
    isInvisible,
    data,
    userAgent,
    cookies
  }: HCaptcha) {
    super(type);
    this.websiteUrl = websiteURL;
    this.websiteKey = websiteKey;
    this.isInvisible = isInvisible;
    this.data = data;
    this.userAgent = userAgent;
    this.cookies = cookies;
  }
}
