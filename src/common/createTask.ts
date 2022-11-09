import { Captcha } from "./captcha.js";

export abstract class CreateTask {
  public providerKey: string;
  public task: Captcha;
  public softId?: string;
}
