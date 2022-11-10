import { ReCaptcha } from "./ReCaptcha.js";

export type ReCaptchaV2Proxy = {
  recaptchaDataSValue?: string;
  proxyType: string;
  proxyAddress: string;
  proxyPort: number;
  proxyLogin?: string;
  proxyPassword?: string;
  cookies?: string;
} & ReCaptcha;
