import { GeeTestTaskProxyless } from "./geeTestTask.js";
import { GeetestProxy } from "../../types/CaptchaTypes/GeetestProxy.js";

/**
* Represents the Geetest Proxy Task Class.
* @extends GeeTestTaskProxyless
*/
export class GeetestTask extends GeeTestTaskProxyless {
  public proxyType: string;
  public proxyAddress: string;
  public proxyPort: number;
  public proxyLogin?: string;
  public proxyPassword?: string;

  /**
  * Constructs the object type GeeTestTask.
  * @param {GeetestProxy}
  */
  public constructor({
    type,
    websiteUrl,
    gt,
    challenge,
    geetestApiServerSubdomain,
    geetestGetLib,
    proxyType,
    proxyAddress,
    proxyPort,
    proxyLogin,
    proxyPassword,
    userAgent,
  }: GeetestProxy) {
    super({
      type,
      websiteUrl,
      gt,
      challenge,
      geetestApiServerSubdomain,
      geetestGetLib,
      userAgent,
    });
    this.proxyType = proxyType;
    this.proxyAddress = proxyAddress;
    this.proxyPort = proxyPort;
    this.proxyLogin = proxyLogin;
    this.proxyPassword = proxyPassword;
  }
}
