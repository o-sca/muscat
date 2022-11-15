import { ImageToText } from "./imageToText.js";
import { NoCaptchaTask } from "./reCaptchaV2Proxy.js";
import { NoCaptchaTaskProxyless } from "./reCaptchaV2.js";
import { ReCaptchaV2EnterpriseProxyless } from "./reCaptchaV2Enterprise.js";
import { ReCaptchaV2Enterprise } from "./reCaptchaV2EnterpriseProxy.js";
import { ReCaptchaV3TaskProxyless } from "./reCaptchaV3.js";
import { FunCaptchaTaskProxyless } from "./funCaptcha.js";
import { FunCaptchaTask } from "./funCaptchaProxy.js";
import { HCaptchaTaskProxyless } from "./hCaptcha.js";
import { HCaptchaTask } from "./hCaptchaProxy.js";
import { GeeTestTaskProxyless } from "./geetest.js";
import { GeetestTask } from "./geetestProxy.js";

export type Task =
  | ImageToText
  | NoCaptchaTask
  | NoCaptchaTaskProxyless
  | ReCaptchaV2Enterprise
  | ReCaptchaV2EnterpriseProxyless
  | ReCaptchaV3TaskProxyless
  | FunCaptchaTaskProxyless
  | FunCaptchaTask
  | HCaptchaTaskProxyless
  | HCaptchaTask
  | GeeTestTaskProxyless
  | GeetestTask
