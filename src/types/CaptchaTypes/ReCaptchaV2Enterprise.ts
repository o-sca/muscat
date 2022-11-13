import { ReCaptcha } from "./ReCaptcha.js";

export type ReCaptchaV2Enterprise = {
  enterprisePayload: string;
  apiDomain: string;
} & ReCaptcha;
