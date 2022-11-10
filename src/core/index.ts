import { Response } from "got";
import { RequestClient } from "../common/requestClient.js";
import { ClientOptions } from "../common/clientOptions.js";
import { BalanceError } from "../errors/GetBalance.js";
import { Converter } from "../common/converter.js";
import { Task } from "../common/captchas/task.js";
import {
  GetBalanceResponse,
  GetBalanceResponseError,
  GetBalanceResponseSuccess
} from "../types/Balance.js";
import {
  CreateTaskResponse,
  CreateTaskResponseSuccess
} from "../types/CreateTask.js";

export class Client {
  private clientOptions: ClientOptions;

  public constructor(clientOptions: ClientOptions) {
    this.clientOptions = clientOptions;
  }

  public async getBalance(
    abortController?: AbortController
  ): Promise<GetBalanceResponse> {
    const { client } = new RequestClient({
      prefixUrl: this.clientOptions.provider,
      abortController: abortController
    });

    const { body }: Response<GetBalanceResponse> = await client(`getBalance`, {
      json: {
        clientKey: this.clientOptions.key
      },
      responseType: "json"
    })

    if (body.errorId !== 0) {
      const errorCode = Converter.convertError((body as GetBalanceResponseError).errorCode);
      throw new BalanceError(errorCode);
    }

    return body as GetBalanceResponseSuccess;
  }

  public async solve(
    task: Task,
    abortController?: AbortController
  ): Promise<CreateTaskResponse> {
    const { client } = new RequestClient({
      prefixUrl: this.clientOptions.provider,
      abortController: abortController
    });

    const { body }: Response<CreateTaskResponse> = await client(`createTask`, {
      json: {
        clientKey: this.clientOptions.key,
        task: JSON.stringify({
          ...task
        })
      },
      responseType: "json",
    })

    return body as CreateTaskResponseSuccess;
  }

}
