import { ClientOptions } from "./common/clientOptions.js";
import { Client } from "./core/index.js";
import { Setup } from "./types/Setup.js";

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
  * @param {Setup} provider, providerKey, websiteKey, websiteUrl
  * @throws {Error} if any of the param values are invalid or missing
  */
  public static setup({
    provider: provider,
    providerKey: providerKey,
    websiteKey: websiteKey,
    websiteUrl: websiteUrl
  }: Setup) {
    if (!provider || !providerKey) {
      throw new Error("Missing or invalid values in parameter for setup method");
    }

    this.config = {
      websiteUrl: websiteUrl,
      websiteKey: websiteKey,
      clientOption: new ClientOptions({
        provider: provider,
        providerKey: providerKey
      })
    }
  }

  public static async getBalance() {
    try {
      const balance = await new Client(this.config.clientOption).getBalance();
      return balance;
    } catch (err) {
      console.error(err);
    }
  }
}

const muscat = Muscat;

export default muscat;
