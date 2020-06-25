import mockjs from 'mockjs';

export default {
  '/flags':mockjs.mock({
    code: 200,
    'data|5': [
      {
        "id": "1",
        "payer_id": "@string",
        "task": "每天读英语",
        "payer_name": "夜夜(王啸诗)",
        "days": "@integer(60, 100)", // todo
        "max_witness": "@integer(60, 100)", // todo
        "payer_avatar_url": "https://mixin-images.zeromesh.net/EkbdjRr3qdjL9ItBil-_DHhiDvCkauFYlzOiHlTXFD53AY3W3_5q0v9hOyroJuYfpDKT4NFLvY9RgSmewzfoFA=s256",
        "asset_id": "@string",
        "amount": "@integer(60, 100)", // todo
        "times_achieved": "@integer(60, 100)", // todo
        "status": "paid"
      },
      {
        "id": "2",
        "payer_id": "@string",
        "task": "每天写程序",
        "payer_name": "夜夜(王啸诗)",
        "days": "@integer(60, 100)", // todo
        "max_witness": "@integer(60, 100)", // todo
        "payer_avatar_url": "https://mixin-images.zeromesh.net/EkbdjRr3qdjL9ItBil-_DHhiDvCkauFYlzOiHlTXFD53AY3W3_5q0v9hOyroJuYfpDKT4NFLvY9RgSmewzfoFA=s256",
        "asset_id": "@string",
        "amount": "@integer(60, 100)", // todo
        "times_achieved": "@integer(60, 100)", // todo
        "status": "paid"
      }
    ]
  }),
  '/flags/1/evidences':mockjs.mock({
    code:200,
    'data|1-5':[
      {
        "attachement_id:": "jddisas",
        "flag_id":"321",
        "type":"image",
        "url":"http://dummyimage.com/100x150",
        "create_at":"2020_01_04 22:00:32"
      }
    ]
  }),
  '/flag':mockjs.mock({
    code:200
  })
}
