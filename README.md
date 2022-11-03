# 使い方
Use this templateを押します。
![image](https://user-images.githubusercontent.com/19358182/179793260-c362e6c6-9d02-44a5-b205-f666d97156f1.png)
必要な項目を書いてCreate repository from templateを押します。
  
![image](https://user-images.githubusercontent.com/19358182/179793543-0256248e-d329-4225-a577-4eced5fb856a.png)

できたリポジトリーをgit cloneしてきます。

local.settings.jsonを以下内容で作成します。
```json
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsStorage": ""
  }
}

```
![image](https://user-images.githubusercontent.com/19358182/199638437-086d6dd2-415c-46c7-b6d7-c294cade5171.png)

npm installします。

SampleTriggerのindex.tsの任意の場所でブレークポイントを設置してF5します。

ログに以下のようなURLが出てくるのでURLをコピーしてブラウザで実行します。

```
SampleTrigger: [GET,POST] http://localhost:7072/api/SampleTrigger
```
