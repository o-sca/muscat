import { CaptchaBase } from "./captchaBase.js";
import { ImageToText as ImageToTextType } from "../../types/CaptchaTypes/ImageToText.js";

/**
* Represents the ImageToText Task Class.
* @extends CaptchaBase
*/
export class ImageToText extends CaptchaBase {
  public body: string;
  public CapMonsterModule?: string;
  public recognizingThreshold?: number;
  public Case?: boolean;
  public numeric?: number;
  public math?: boolean;

  /*
  * Constructs the object type ImageToText.
  * @param {ImageToTextType}
  */
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
