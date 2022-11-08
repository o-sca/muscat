import { ICaptcha } from "../types/ICaptcha.js";

/**
 * Class representing Captcha.
 */
export class Captcha implements ICaptcha {
  protected websiteKey: string;
  protected websiteUrl: string;
  protected providerKey: string;
  protected taskId: number;
  protected _solution: string;

  /**
  * Constructs the object type Captcha.
  * @throws {Error} if any of the param values not given.
  */
  public constructor(
    providerKey: string,
    websiteKey: string,
    websiteUrl: string
  ) {
    if (!websiteKey || !websiteUrl || !providerKey) {
      throw new Error("InvalidArgumentException");
    }
    this.websiteKey = websiteKey;
    this.websiteUrl = websiteUrl;
    this.providerKey = providerKey;
    this.taskId = 0;
  }

  /**
  * Returns the captcha response
  *
  * @returns {string} _solution.
  */
  public get solution(): string {
    return this._solution;
  }

  /**
  * Create Task.
  */
  public createTask(): void {
    return;
  }

  /**
  * Poll Result.
  */
  public getTaskResult(): void {
    return;
  }
}
