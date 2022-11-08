import { Task } from "../types/Task.js";

/**
* Represents the base Captcha class.
* @abstract
*/
export abstract class Captcha {
  public taskType: Task;

  /**
  * Constructs the object type Captcha.
  * @param {Task} taskType
  */
  public constructor(taskType: Task) {
    this.taskType = taskType;
  }
}
