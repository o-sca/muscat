import { CaptchaBase } from "./captchaBase.js";
import { ImageToText as ImageToTextType } from "../../types/CaptchaTypes/ImageToText.js";

export class ImageToText extends CaptchaBase {
  public body: string;
  public CapMonsterModule?: string;
  public recognizingThreshold?: number;
  public Case?: boolean;
  public numeric?: number;
  public math?: boolean;

  public constructor({
    type,
    body,
    CapMonsterModule,
    recognizingThreshold,
    Case,
    numeric,
    math
  }: ImageToTextType) {
    super(type);
    this.body = body;
    this.CapMonsterModule = CapMonsterModule;
    this.recognizingThreshold = recognizingThreshold;
    this.Case = Case;
    this.numeric = numeric;
    this.math = math;
  }
}
