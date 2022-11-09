import got, { Got } from "got";
import { customOptionsHook } from "./customOptionsHook.js";
import { RequestError } from "../errors/Request.js";

/**
* Base Request Client using Got Http Client.
*/
export class RequestClient {
  public client: Got;

  /**
  * Constructs the object type RequestClient.
  * @param {string} prefixUrl
  * @throws {RequestError} if invalid prefixUrl is given
  */
  public constructor({
    prefixUrl: prefixUrl,
  }: {
    prefixUrl: string;
  }) {
    if (!prefixUrl) {
      throw new RequestError(`Invalid prefixUrl`)
    }

    this.client = got.extend({
      mutableDefaults: true,
      throwHttpErrors: false,
      timeout: { request: 20000 },
      retry: { limit: 0 },
      prefixUrl: prefixUrl,
      method: "POST",
      headers: {
        "accept-encoding": "gzip, br",
        "content-type": "application/json"
      },
      hooks: {
        init: [customOptionsHook]
      }
    })
  }
}

