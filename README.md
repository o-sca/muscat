<h1 align="center">Muscat</h1>
Your all in one captcha solver package.

## Usage

```js
import muscat from 'muscat';

(async () => {
  muscat.setup({
    provider: "capmonster",
    providerKey: "123mao234n",
    websiteUrl <optional>
    websiteKey <optional>
  });

  const balance = await muscat.getBalance();
  
  console.log(balance);
  // { errorId: 0, balance: 1.028 }

  const createTaskResponse = await muscat.solve({
    "type": "NoCaptchaTaskProxyless",
    "websiteURL": "https://recaptcha-demo.appspot.com/recaptcha-v2-invisible.php",
    "websiteKey": "6LcmDCcUAAAAAL5QmnMvDFnfPTP4iCUYRk2MwC0-"
  });
  
  console.log(createTaskResponse);
  // { errorId: 0, errorCode: '', errorDescription: '', taskId: 498740219 }

  await muscat.getTaskResult(createTaskResponse.taskId);
  const captchaSolution = muscat.solution;

  console.log(captchaSolution);
  // 3AHJ_VuvYIBNBW5yyv0zRYJ75VkOKvhKj9_xGBJKnQimF72rfoq3Iy-DyGHMwLAo6a3
})();
```
