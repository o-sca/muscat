export enum Errors {
  Timeout = 'Timeout',
  ZERO_BALANCE = 'ZERO BALANCE',
  INVALID_PROVIDER = "INVALID PROVIDER",
  KEY_DOES_NOT_EXIST = 'KEY_DOES_NOT_EXIST',
}

export type ErrorsKey = keyof typeof Errors;
