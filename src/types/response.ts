export type TaskResultResponseSuccess = {
  errorId: number;
  status: TaskResultStatus.ready;
  solution: CaptchaSolution
}

export type TaskResultResponseProcessing = {
  errorId: number;
  status: TaskResultStatus.processing;
}

export type TaskResultResponseError = {
  errorId: number;
  errorCode: string;
  errorDescription: string;
  taskId: number;
}

export type TaskResultResponse =
  TaskResultResponseProcessing |
  TaskResultResponseSuccess |
  TaskResultResponseError;

enum TaskResultStatus {
  processing = "processing",
  ready = "ready"
}

type ReCaptchaSolution = {
  gRecaptchaResponse: string
}

type ImageToTextSolution = {
  text: string;
}

type FunCaptchaSolution = {
  token: string;
}

type GeeTestSolution = {
  challenge: string;
  validate: string;
  seccode: string;
}

export type CaptchaSolution =
  | ReCaptchaSolution
  | ImageToTextSolution
  | FunCaptchaSolution
  | GeeTestSolution
