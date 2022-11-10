import { ReCaptchaV2Task } from "./reCaptchaV2.js";
import { ReCaptchaV2ProxyTask } from "./reCaptchaV2Proxy.js";

export type Task =
  | ReCaptchaV2ProxyTask
  | ReCaptchaV2Task

