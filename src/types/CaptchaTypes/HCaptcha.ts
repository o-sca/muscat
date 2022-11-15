import { ReCaptcha } from "./ReCaptcha.js"

export type HCaptcha = {
  isInvisible?: boolean;
  data?: string;
  cookies?: string;
  userAgent?: string;
} & ReCaptcha;
