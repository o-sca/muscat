import { OptionsInit } from "got";
import { Task } from "./Task.js";

export type Options = {
  provider: string;
  providerKey: string;
}

export interface Context {
  clientKey?: string;
  taskId?: number;
  task?: Task
}

export interface GotOptionsInit extends Context, OptionsInit { }
