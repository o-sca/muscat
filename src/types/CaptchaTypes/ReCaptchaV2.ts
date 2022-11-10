import { ReCaptcha } from "./ReCaptcha.js";

export type ReCaptchaV2 = {
  recaptchaDataSValue?: string;
  userAgent?: string;
  cookies?: string;
} & ReCaptcha;
