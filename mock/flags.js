import mockjs from 'mockjs';

export default {
  '/flags':mockjs.mock({
    code: 200,
    'data|10': [
      {
        "id": "@string",
        "payer_id": "@string",
        "task": "@string",
        "days": "@integer(60, 100)",
        "max_witness": "@integer(60, 100)",
        "asset_id": "@string",
        "amount": "@integer(60, 100)",
        "times_achieved": "@integer(60, 100)",
        "status": "paid"
      }
    ]
  })
}
