/*
 * kintone JavaScript Client sample program (for Node.js)
 * Copyright (c) 2020 Cybozu
 *
 * Licensed under the MIT License
 * https://opensource.org/licenses/mit-license.php
 */

'use strict'
const { KintoneRestAPIClient } = require('@kintone/rest-api-client')
// クライアントの作成
const client = new KintoneRestAPIClient({
  baseUrl: 'https://bozuman.cybozu.com',
  auth: {
    apiToken: 'g4WQzvNLUDgau9hDb3cKlJgyOeoIe9uTgAQxPbMA',
  },
})

// リクエストパラメータの設定
// const APP_ID = 20708
// const RECORD_ID = 1
// const params = {
//   app: APP_ID,
//   id: RECORD_ID,
// }

const params0 = {
  app: 20708,
}
// レコードの取得
// client.record
//   .getRecord(params)
//   .then((resp) => {
//     console.log(resp.record)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
const ptnUrlLastWord = /\d+(?=\/?$)/
const outputArray = Array(0)
client.record
  .getAllRecords(params0)
  .then((resp) => {
    console.log(resp.length)
    for (const item of resp) {
      const match0 = ptnUrlLastWord.exec(item['链接'].value)
      const match1 = ptnUrlLastWord.exec(item['链接_0'].value)
      if (match0 && match1) {
        const ov = {
          ja: match0[0],
          zh: match1[0],
        }
        outputArray.push(ov)
      } else {
        console.log('none')
      }
    }
  })
  .then(() => {
    console.log(outputArray)
  })
  .catch((err) => {
    console.log(err)
  })
