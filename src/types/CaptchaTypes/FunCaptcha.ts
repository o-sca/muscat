import { Captcha } from "./Captcha.js"

export type FunCaptcha = {
  websiteURL: string;
  websitePublicKey: string;
  funcaptchaApiJSSubdomain?: string;
  data?: string;
} & Captcha;
