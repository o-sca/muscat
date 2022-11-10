import got, { Got } from "got";
import { customOptionsHook } from "./customOptionsHook.js";
import { RequestError } from "../errors/Request.js";

/**
* Base Request Client using Got Http Client.
*/
export class RequestClient {
  private _client: Got;

  /**
  * Constructs the object type RequestClient.
  * @param {string} prefixUrl
  * @throws {RequestError} if invalid prefixUrl is given
  */
  public constructor({
    prefixUrl: prefixUrl,
    abortController: abortController
  }: {
    prefixUrl: string;
    abortController?: AbortController
  }) {
    if (!prefixUrl) {
      throw new RequestError(`Invalid prefixUrl`)
    }

    this._client = got.extend({
      mutableDefaults: true,
      throwHttpErrors: false,
      timeout: { request: 20000 },
      retry: { limit: 0 },
      prefixUrl: prefixUrl,
      method: "POST",
      headers: {
        "accept-encoding": "gzip, br",
      },
      hooks: {
        init: [customOptionsHook]
      },
    })

    if (abortController) {
      this._client.extend({
        signal: abortController
      })
    }
  }

  /**
  * Returns the Got instance client.
  * @returns {Got} _client
  */
  public get client(): Got {
    return this._client;
  }
}

