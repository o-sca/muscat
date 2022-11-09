import { OptionsInit, Options } from "got";
import { GotOptionsInit } from "../types/Options.js";

/**
* Populates context object with custom options.
* @param {OptionsInit}  plain
* @param {Options}      options
*/
export const customOptionsHook = (plain: OptionsInit, options: Options): void => {
  const typedPlain = plain as GotOptionsInit;

  const names = [
    'clientKey',
    'taskId',
    'task',
  ] as const;

  for (const name of names) {
    if (name in plain) {
      options.context[name] = typedPlain[name];
      delete typedPlain[name];
    }
  }
}

