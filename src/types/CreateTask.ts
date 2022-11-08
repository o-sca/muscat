export type CreateTaskResponseSuccess = {
  errorId: 0;
  taskId: number;
}

export type CreateTaskResponseError = {
  errorId: number;
  errorCode: string;
  errorDescription: string;
  taskId: number;
}

export type CreateTaskResponse = CreateTaskResponseSuccess | CreateTaskResponseError;
