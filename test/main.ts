import "dotenv/config";
import muscat from "../src/index.js";
import { Task } from "../src/types/Task.js";

async function main() {
  if (process.env.CAPMONSTER) {
    muscat.setup({
      provider: "capmonster",
      providerKey: process.env.CAPMONSTER
    });

    const balance = await muscat.getBalance();
    console.log(balance);

    const response = await muscat.solve({
      type: Task.NoCaptchaTaskProxyless,
      websiteURL: "https://recaptcha-demo.appspot.com/recaptcha-v2-invisible.php",
      websiteKey: "6LcmDCcUAAAAAL5QmnMvDFnfPTP4iCUYRk2MwC0-"
    });

    console.log(response);

    const result = await muscat.getTaskResult(response.taskId);
    console.log(result)
  }
}

main().catch((err: Error) => {
  console.error(err);
})
