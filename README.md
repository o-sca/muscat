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

  await muscat.createTask();
  await muscat.getTaskResult();
  const captchaSolution = muscat.capmonster.solution;

  console.log(captchaSolution);
  // 3AHJ_VuvYIBNBW5yyv0zRYJ75VkOKvhKj9_xGBJKnQimF72rfoq3Iy-DyGHMwLAo6a3
})();
```
