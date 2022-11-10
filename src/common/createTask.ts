import { CaptchaBase } from "./captchas/captchaBase.js";

export abstract class CreateTask {
  public providerKey: string;
  public task: CaptchaBase;
  public softId?: string;
}
