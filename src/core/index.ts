import { Response } from "got";
import { RequestClient } from "../common/request.js";
import { ClientOptions } from "../common/clientOptions.js";
import { BalanceError } from "../errors/GetBalance.js";
import { GetBalanceResponse, GetBalanceResponseError, GetBalanceResponseSuccess } from "../types/Balance.js";
import { CreateTaskResponse, CreateTaskResponseSuccess } from "../types/CreateTask.js";

export class Client {
  private clientOptions: ClientOptions;

  public constructor(clientOptions: ClientOptions) {
    this.clientOptions = clientOptions;
  }

  public async getBalance(): Promise<GetBalanceResponse> {
    const { client } = new RequestClient({ prefixUrl: this.clientOptions.provider });
    const { body }: Response<GetBalanceResponse> = await client(`getBalance`, {
      json: {
        clientKey: this.clientOptions.key
      },
      responseType: "json"
    })
    return body as GetBalanceResponseSuccess;
  }

  public async createTask(): Promise<CreateTaskResponse> {
    const { client } = new RequestClient({ prefixUrl: this.clientOptions.provider });
    const { body }: Response<CreateTaskResponse> = await client(`createTask`, {
      json: {
        clientKey: this.clientOptions.key,
        taskType: {}
      },
      responseType: "json",
    })
    return body as CreateTaskResponseSuccess;
  }
}
