import { ReCaptchaV2 } from "../../types/CaptchaTypes/ReCaptchaV2.js";
import { CaptchaBase } from "./captchaBase.js";

/**
* Represents the ReCaptcha V2 Task Class.
* @extends CaptchaBase
*/
export class ReCaptchaV2Task extends CaptchaBase {
  public websiteUrl: string;
  public websiteKey: string;
  public recaptchaDataSValue?: string;
  public userAgent?: string;
  public cookies?: string;

  /**
  * Constructs the object type ReCaptchaV2Task.
  * @param {ReCaptchaV2}
  */
  constructor({
    type,
    websiteUrl,
    websiteKey,
    recaptchaDataSValue,
    userAgent,
    cookies
  }: ReCaptchaV2) {
    super(type);
    this.websiteUrl = websiteUrl;
    this.websiteKey = websiteKey;
    this.recaptchaDataSValue = recaptchaDataSValue;
    this.userAgent = userAgent;
    this.cookies = cookies;
  }
}
