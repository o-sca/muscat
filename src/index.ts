import { ClientOptions } from "./common/clientOptions.js";
import { Client } from "./core/index.js";
import { Setup } from "./types/Setup.js";
import { SetupError } from "./errors/Setup.js";
import { Task } from "./common/captchas/task.js";

/**
* Class representing Muscat.
*/
class Muscat {
  /* Config property. */
  private static config: {
    clientOption: ClientOptions,
    websiteUrl?: string,
    websiteKey?: string
  }

  /**
  * Sets all property values and constructs clientOption object.
  * @param {Setup} provider, providerKey
  * @throws {Error} if any of the param values are invalid or missing
  */
  public static setup({
    provider: provider,
    providerKey: providerKey,
  }: Setup) {
    if (!provider || !providerKey) {
      throw new SetupError("Missing or invalid values in parameter for setup method");
    }

    this.config = {
      clientOption: new ClientOptions({
        provider: provider,
        providerKey: providerKey
      })
    }
  }

  public static async getBalance() {
    return await new Client(this.config.clientOption).getBalance();
  }

  public static async solve(task: Task) {
    return await new Client(this.config.clientOption).solve(task);
  }

  public static async getTaskResult(taskId: number) {
    return await new Client(this.config.clientOption).getTaskResult(taskId);
  }
}

const muscat = Muscat;
export default muscat;
