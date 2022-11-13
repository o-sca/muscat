import { Errors, ErrorsKey } from "../types/Errors.js";
import { Providers, ProvidersKey } from "../types/Providers.js";
import { Task, TaskKey } from "../types/Task.js";

/**
* Converter for string to an enum state value.
*/
export class Converter {
  /**
  * Returns the enum state value for Providers.
  * @param {string}      toBeConverted
  * @returns {Providers} enum value
  */
  public static convertProvider(toBeConverted: string): Providers {
    const codeType = Providers[toBeConverted.toLowerCase() as ProvidersKey];
    if (codeType) return codeType;
    return Providers.Unknown;
  }

  /**
  * Returns the enum state value for Errors.
  * @param {string}   toBeConverted
  * @returns {Errors} enum value
  */
  public static convertError(toBeConverted: string): Errors {
    const prefix = "ERROR_";

    if (toBeConverted.startsWith(prefix)) {
      toBeConverted = toBeConverted.substring(prefix.length);
    }

    const codeType = Errors[toBeConverted as ErrorsKey];

    if (codeType) return codeType;
    return Errors.Unknown;
  }

  /**
  * Returns the enum state value for Task.
  * @param {string}  toBeConverted
  * @returns {Task}    enum value
  */
  public static convertTaskType(toBeConverted: string): Task {
    const codeType = Task[toBeConverted as TaskKey];
    if (codeType) return codeType;
    return Task.Unknown;
  }
}
