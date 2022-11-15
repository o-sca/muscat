import { Captcha } from "./Captcha.js";

export type Geetest = {
  websiteUrl: string;
  gt: string;
  challenge: string;
  geetestApiServerSubdomain?: string;
  geetestGetLib?: string;
  userAgent?: string;
} & Captcha;
