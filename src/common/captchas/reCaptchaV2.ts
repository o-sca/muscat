import { ReCaptchaV2 } from "../../types/CaptchaTypes/ReCaptchaV2.js";
import { CaptchaBase } from "./captchaBase.js";

/**
* Represents the ReCaptcha V2 Task Class.
* @extends CaptchaBase
*/
export class NoCaptchaTaskProxyless extends CaptchaBase {
  public websiteUrl: string;
  public websiteKey: string;
  public recaptchaDataSValue?: string;
  public userAgent?: string;
  public cookies?: string;

  /**
  * Constructs the object type NoCaptchaTaskProxyless.
  * @param {ReCaptchaV2}
  */
  public constructor({
    type,
    websiteURL,
    websiteKey,
    recaptchaDataSValue,
    userAgent,
    cookies
  }: ReCaptchaV2) {
    super(type);
    this.websiteUrl = websiteURL;
    this.websiteKey = websiteKey;
    this.recaptchaDataSValue = recaptchaDataSValue;
    this.userAgent = userAgent;
    this.cookies = cookies;
  }
}
