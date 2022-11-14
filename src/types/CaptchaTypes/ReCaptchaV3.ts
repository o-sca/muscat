import { ReCaptcha } from "./ReCaptcha.js"

export type ReCaptchaV3 = {
  minScore?: number;
  pageAction?: string;
} & ReCaptcha;
