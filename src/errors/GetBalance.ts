import { Errors } from "../types/Errors.js";

/**
* Better exception on getBalance.
* @extends Error
*/
export class BalanceError extends Error {
  /**
  * Constructs the object type BalanceError.
  * @param {Errors} error
  */
  public constructor(error: Errors) {
    super(`Error getting balance: ${error}`);
  }
}
