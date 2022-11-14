import { CaptchaBase } from "./captchaBase.js";
import { ReCaptchaV3 } from "../../types/CaptchaTypes/ReCaptchaV3.js";

/**
* Represents the ReCaptcha V3 Proxyless Task class.
* @extends captchaBase
*/
export class ReCaptchaV3TaskProxyless extends CaptchaBase {
  public websiteUrl: string;
  public websiteKey: string;
  public minScore?: number;
  public pageAction?: string;

  /**
  * Constructs the object type ReCaptchaV3TaskProxyless.
  * @param {ReCaptchaV3}
  */
  public constructor({
    type,
    websiteURL,
    websiteKey,
    minScore,
    pageAction
  }: ReCaptchaV3) {
    super(type);
    this.websiteUrl = websiteURL;
    this.websiteKey = websiteKey;
    this.minScore = minScore;
    this.pageAction = pageAction;
  }
}
