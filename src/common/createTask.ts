import { Captcha } from "./common/captcha.js";

export abstract class CreateTask {
  public providerKey: string;
  public task: Captcha;
  public softId?: string;
}
