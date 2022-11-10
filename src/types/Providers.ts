export enum Providers {
  capmonster = "https://api.capmonster.cloud",
  twocaptcha = "http://2captcha.com",
  anticaptcha = "https://api.anti-captcha.com",
  captchaai = "https://ai.captchaai.io",
  anycaptcha = "https://api.anycaptcha.com",
  Unknown = "Unknown",
}

export type ProvidersKey = keyof typeof Providers;
