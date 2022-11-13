import { Task } from "../../types/Task.js";
import { Converter } from "../converter.js";

/**
* Represents the base Captcha class.
* @abstract
*/
export abstract class CaptchaBase {
  public type: Task | string;

  /**
  * Constructs the object type Captcha.
  * @param {Task|string} type
  */
  public constructor(type: string | Task) {
    // In case the user inputs a string value to the 
    // task key, it will convert to the enum value.
    if (typeof type === 'string') {
      this.type = Converter.convertTaskType(type);
    } else {
      this.type = type;
    }
  }
}
