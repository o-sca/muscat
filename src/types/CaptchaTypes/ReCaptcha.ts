import { Captcha } from "./Captcha.js";

export type ReCaptcha = {
  websiteURL: string;
  websiteKey: string;
} & Captcha;
