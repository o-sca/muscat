import { Captcha } from "./Captcha.js";

export type ReCaptcha = {
  websiteUrl: string;
  websiteKey: string;
} & Captcha;
