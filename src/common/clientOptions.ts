import { Options } from "../types/Options.js";
import { Provider } from "../types/Providers.js";
import { Errors } from "../types/Errors.js";

export class ClientOptions {
  private _provider: Provider;
  private providerKey: string;

  public constructor(options: Options) {
    const { provider, providerKey } = options;

    this.providerKey = providerKey;

    switch (provider.toLowerCase()) {
      case "capmonster":
        this._provider = Provider.Capmonster;
        break;
      case "twocaptcha":
        this._provider = Provider.TwoCaptcha;
        break;
      case "anticaptcha":
        this._provider = Provider.AntiCaptcha;
        break;
      default:
        throw new Error(Errors.INVALID_PROVIDER);
    }
  }

  public get provider(): string {
    return this._provider;
  }

  public get key(): string {
    return this.providerKey;
  }
}
