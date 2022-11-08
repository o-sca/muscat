export type CreateTask = {
  taskId: number;
  errorId: number;
  errorCode?: string;
  errorDescription?: string;
};

export type TaskResult = {
  errorId: number;
  errorCode?: string;
  errorDescription?: string;
  status: string;
  solution: {
    gRecaptchaResponse: string;
  }
};

