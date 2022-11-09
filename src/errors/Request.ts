/**
* Better exception on RequestClient.
* @extends Error
*/
export class RequestError extends Error {
  /**
  * Constructs the object type RequestError.
  * @param {string} error
  */
  constructor(error: string) {
    super(`Error contructing Request Client: ${error}`);
  }
}
