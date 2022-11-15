import { Geetest } from "../../types/CaptchaTypes/Geetest.js";
import { CaptchaBase } from "./captchaBase.js";

/**
* Represents the Geetest Proxyless Task Class.
* @extends CaptchaBase
*/
export class GeeTestTaskProxyless extends CaptchaBase {
  public websiteUrl: string;
  public gt: string;
  public challenge: string;
  public geetestApiServerSubdomain?: string;
  public geetestGetLib?: string;
  public userAgent?: string;

  /**
  * Constructs the object type GeeTestTaskProxyless.
  * @param {Geetest}
  */
  public constructor({
    type,
    websiteUrl,
    gt,
    challenge,
    geetestApiServerSubdomain,
    geetestGetLib,
    userAgent
  }: Geetest) {
    super(type);
    this.websiteUrl = websiteUrl;
    this.gt = gt;
    this.challenge = challenge;
    this.geetestApiServerSubdomain = geetestApiServerSubdomain;
    this.geetestGetLib = geetestGetLib;
    this.userAgent = userAgent;
  }
}
