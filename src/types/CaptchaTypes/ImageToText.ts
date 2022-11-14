import { Captcha } from "./Captcha.js";

export type ImageToText = {
  body: string;
  CapMonsterModule?: string;
  recognizingThreshold?: number;
  Case?: boolean;
  numeric?: number;
  math?: boolean;
} & Captcha;
