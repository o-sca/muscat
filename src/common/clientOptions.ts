import { Options } from "../types/Options.js";
import { Providers } from "../types/Providers.js";
import { Converter } from "./converter.js";

export class ClientOptions {
  private _provider: Providers;
  private providerKey: string;

  public constructor(options: Options) {
    const { provider, providerKey } = options;
    this.providerKey = providerKey;
    this._provider = Converter.convertProvider(provider);
  }

  public get provider(): string {
    return this._provider;
  }

  public get key(): string {
    return this.providerKey;
  }
}
