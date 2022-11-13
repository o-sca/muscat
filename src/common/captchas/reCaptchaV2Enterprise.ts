import { CaptchaBase } from "./captchaBase.js";
import { ReCaptchaV2Enterprise } from "../../types/CaptchaTypes/ReCaptchaV2Enterprise.js";

/**
* Represents the ReCaptcha V2 Enterprise Task Class.
* @extends CaptchaBase
*/
export class ReCaptchaV2EnterpriseProxyless extends CaptchaBase {
  public websiteURL: string;
  public websiteKey: string;
  public enterprisePayload?: string;
  public apiDomain?: string;

  /**
  * Constructs the object type ReCaptchaV2Enterprise.
  * @param {ReCaptchaV2Enterprise}
  */
  public constructor({
    type,
    websiteURL,
    websiteKey,
    enterprisePayload,
    apiDomain
  }: ReCaptchaV2Enterprise) {
    super(type);
    this.websiteURL = websiteURL;
    this.websiteKey = websiteKey;
    this.enterprisePayload = enterprisePayload;
    this.apiDomain = apiDomain;
  }
}
