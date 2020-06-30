import mockjs from 'mockjs';

export default {
  '/me':mockjs.mock({
    code:200,
    data:{
      user_id:'123',
      identity_number: '321',
      full_name:'jerryjiao',
      avatar_url: 'https://mixin-images.zeromesh.net/EkbdjRr3qdjL9ItBil-_DHhiDvCkauFYlzOiHlTXFD53AY3W3_5q0v9hOyroJuYfpDKT4NFLvY9RgSmewzfoFA=s256'
    }
  })
}