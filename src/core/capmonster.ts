import got, { OptionsOfJSONResponseBody, Response } from "got";
import { setTimeout } from "node:timers/promises"
import { Captcha } from "./captcha.js";
import { CreateTask, TaskResult } from "../types/response.js";

/**
* Handles task creation and returning captcha response.
*/
export class Capmonster extends Captcha {
  /**
  * Constructs the object type Capmonster.
  * 
  * @param {string} providerKey
  * @param {string} websiteKey
  * @param {string} websiteUrl
  */
  constructor(
    providerKey: string,
    websiteKey: string,
    websiteUrl: string
  ) {
    super(providerKey, websiteKey, websiteUrl)
  }

  /**
  * Creates the task through capmonster createTask 
  * endpoint and sets the taskId.
  *
  * @throws Will throw an error if body or status 
  * responds with null or false.
  */
  public override async createTask(): Promise<void> {
    const options: OptionsOfJSONResponseBody = {
      url: "https://api.capmonster.cloud/createTask",
      method: "POST",
      headers: {
        "accept-encoding": "gzip, br",
        "content-type": "application/json"
      },
      json: {
        clientKey: this.providerKey,
        task: {
          type: "NoCaptchaTaskProxyless",
          websiteURL: this.websiteUrl,
          websiteKey: this.websiteKey,
        }
      },
      responseType: "json"
    }
    const { ok, body }: Response<CreateTask> = await got(options);
    if (!ok || !body) throw "Error in response";
    if (body.errorId !== 0) {
      throw {
        errorCode: body.errorCode,
        errorDescription: body.errorDescription
      };
    } else this.taskId = body.taskId;
  }

  /**
  * Returns the gcaptcha string else invokes self. 
  */
  public override async getTaskResult(): Promise<void> {
    const options: OptionsOfJSONResponseBody = {
      url: "https://api.capmonster.cloud/getTaskResult",
      method: "POST",
      json: {
        clientKey: this.providerKey,
        taskId: this.taskId
      },
      responseType: "json"
    }
    const { ok, body }: Response<TaskResult> = await got(options);
    if (ok && body.status === "ready") {
      this._solution = body.solution.gRecaptchaResponse
    } else {
      await setTimeout(3000);
      return this.getTaskResult();
    }
  }
}
