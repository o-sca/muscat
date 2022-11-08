export type CreateTask = {
  taskId: number;
  errorId: number;
  errorCode?: string;
  errorDescription?: string;
};

export type TaskResult<T> = {
  errorId: number;
  errorCode?: string;
  errorDescription?: string;
  status: string;
  solution: T
};

