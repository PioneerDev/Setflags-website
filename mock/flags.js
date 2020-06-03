import mockjs from 'mockjs';

export default {
  '/flags':mockjs.mock({
    code: 200,
    'data|5': [
      {
        "id": "@string",
        "payer_id": "@string",
        "task": "每天读英语",
        "days": "@integer(60, 100)", // todo
        "max_witness": "@integer(60, 100)", // todo
        "asset_id": "@string",
        "amount": "@integer(60, 100)", // todo
        "times_achieved": "@integer(60, 100)", // todo
        "status": "paid"
      },
      {
        "id": "@string",
        "payer_id": "@string",
        "task": "每天写程序",
        "days": "@integer(60, 100)", // todo
        "max_witness": "@integer(60, 100)", // todo
        "asset_id": "@string",
        "amount": "@integer(60, 100)", // todo
        "times_achieved": "@integer(60, 100)", // todo
        "status": "paid"
      }
    ]
  })
}
