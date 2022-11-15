import { NoCaptchaTaskProxyless } from "./reCaptchaV2.js";
import { ReCaptchaV2EnterpriseProxyless } from "./reCaptchaV2Enterprise.js";
import { ReCaptchaV2Enterprise } from "./reCaptchaV2EnterpriseProxy.js";
import { NoCaptchaTask } from "./reCaptchaV2Proxy.js";

export type Task =
  | NoCaptchaTask
  | NoCaptchaTaskProxyless
  | ReCaptchaV2Enterprise
  | ReCaptchaV2EnterpriseProxyless
