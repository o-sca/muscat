/**
* Better Exception for Task Result.
*/
export class TaskResultError extends Error {
  /**
  * Constructs the object type TaskResultError.
  * @param {string} error
  */
  public constructor(error: string) {
    super(`Error getting Task Result: ${error}`)
  }
}
