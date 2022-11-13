export type TaskResult<E> = {
  errorId: number;
  errorCode: string;
  errorDescription: string;
  status: TaskResultStatus;
  solution?: E
};

enum TaskResultStatus {
  processing = "processing",
  ready = "ready"
}
