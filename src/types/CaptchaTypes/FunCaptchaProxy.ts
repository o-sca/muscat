import { FunCaptcha } from "./FunCaptcha.js";
import { Proxy } from "./Proxy.js";

export type FunCaptchaProxy = {
  userAgent: string;
  cookies?: string;
} & FunCaptcha & Proxy;
