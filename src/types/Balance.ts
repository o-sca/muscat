export type GetBalanceResponseSuccess = {
  errorId: 0;
  balance: number;
}

export type GetBalanceResponseError = {
  errorId: number;
  errorCode: string;
}

export type GetBalanceResponse = GetBalanceResponseSuccess | GetBalanceResponseError;
