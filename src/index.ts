import { Capmonster } from "./core/capmonster.js";

/**
* Class representing Captcha.
*/
class Muscat {
  /* Config property. */
  static config: {
    providerKey: string,
    websiteUrl: string,
    websiteKey: string
  }

  /**
  * Sets all property values.
  * @param {string} key - providerKey
  * @param {string} websiteUrl
  * @param {string} websiteKey
  * @throws {Error} if any of the param values are invalid or missing
  */
  public static setup(
    key: string,
    websiteKey: string,
    websiteUrl: string
  ) {
    if (!key || !websiteKey || !websiteUrl) {
      throw new Error("Missing or invalid values in parameter");
    }
    Muscat.config.providerKey = key
    Muscat.config.websiteUrl = websiteUrl;
    Muscat.config.websiteKey = websiteKey;
  }

  /**
  * Sets the providerKey value.
  * @param {string} key
  * @throws {Error} if invalid key value
  */
  public static setKey(key: string) {
    if (!key) throw new Error("Invalid key value");
    Muscat.config.providerKey = key;
  }

  /**
  * Sets the websiteUrl and websiteKey value.
  * @param {string} websiteUrl
  * @param {string} websiteKey
  * @throws {Error} if invalid websiteUrl or websiteKey value
  */
  public static setWebsite(websiteUrl: string, websiteKey: string) {
    if (!websiteKey || !websiteUrl) {
      throw new Error("Invalid websiteUrl or websiteKey value");
    }
    Muscat.config.websiteUrl = websiteUrl;
    Muscat.config.websiteKey = websiteKey;
  }


  /**
  * Constructs a Capmonster object.
  */
  public static capmonster = new Capmonster(
    Muscat.config.providerKey,
    Muscat.config.websiteKey,
    Muscat.config.websiteUrl
  )
}

const muscat = Muscat;

module.exports = muscat;
export default muscat;
