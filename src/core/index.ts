import got, { HTTPError, OptionsOfJSONResponseBody, Response } from "got";
import { ClientOptions } from "../common/clientOptions.js";
import { BalanceError } from "../errors/GetBalance.js";
import { GetBalanceResponse, GetBalanceResponseError, GetBalanceResponseSuccess } from "../types/Balance.js";

export class Client {
  private clientOptions: ClientOptions;

  public constructor(clientOptions: ClientOptions) {
    this.clientOptions = clientOptions;
  }

  public async getBalance(): Promise<GetBalanceResponse> {
    const options: OptionsOfJSONResponseBody = {
      url: `${this.clientOptions.provider}/getBalance`,
      method: "POST",
      headers: {
        "accept-encoding": "gzip, br",
        "content-type": "application/json"
      },
      json: {
        clientKey: this.clientOptions.key
      },
      responseType: "json",
      timeout: { request: 20000 }
    }
    try {
      const { body }: Response<GetBalanceResponse> = await got(options);
      if (body.errorId !== 0) {
        // throw new BalanceError();
      }
      return body as GetBalanceResponseSuccess;
    } catch (err) {
      if (err instanceof HTTPError) {
        throw new Error(err.message);
      }
      throw err;
    }
  }



}
