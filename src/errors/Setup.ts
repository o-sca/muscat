/**
* Better exception on Muscat.
*/
export class SetupError extends Error {
  /**
  * Construct the object type SetupError.
  * @param {string} error
  */
  constructor(error: string) {
    super(`Error constructing Muscat Configuration: ${error}`);
  }
}
