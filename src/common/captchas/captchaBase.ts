import { Task } from "../../types/Task.js";

/**
* Represents the base Captcha class.
* @abstract
*/
export abstract class CaptchaBase {
  public task: Task;

  /**
  * Constructs the object type Captcha.
  * @param {Task} task
  */
  public constructor(task: Task) {
    this.task = task;
  }
}
