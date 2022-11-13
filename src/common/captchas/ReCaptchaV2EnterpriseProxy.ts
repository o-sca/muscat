import { ReCaptchaV2EnterpriseProxyless } from "./reCaptchaV2Enterprise.js";
import { ReCaptchaV2EnterpriseProxy } from "../../types/CaptchaTypes/ReCaptchaV2EnterpriseProxy.js";

/**
* Represents the ReCaptchaV2 Enterprise Proxy Task Class.
*/
export class ReCaptchaV2Enterprise extends ReCaptchaV2EnterpriseProxyless {
  public proxyType: string;
  public proxyAddress: string;
  public proxyPort: number;
  public proxyLogin?: string;
  public proxyPassword?: string;
  public userAgent?: string;
  public cookies?: string;

  /**
   * Constructs the object type ReCaptchaV2EnterpriseProxyless
   * @param {ReCaptchaV2EnterpriseProxy}
   */
  public constructor({
    type,
    websiteURL,
    websiteKey,
    enterprisePayload,
    apiDomain,
    proxyType,
    proxyAddress,
    proxyPort,
    proxyLogin,
    proxyPassword
  }: ReCaptchaV2EnterpriseProxy) {
    super({ type, websiteURL, websiteKey, enterprisePayload, apiDomain });
    this.proxyType = proxyType;
    this.proxyAddress = proxyAddress;
    this.proxyPort = proxyPort;
    this.proxyLogin = proxyLogin;
    this.proxyPassword = proxyPassword;
  }
}
