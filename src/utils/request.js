
import { extend } from 'umi-request';
import Toastify from 'toastify-js'

// const {BASEURL:baseurl,CLIENTID:clientid} = process.env
// // console.log("clientid", CLIENT_ID)
// console.log("clientid",process.env.BASEURL)
// console.log("baseurl", process.env.CLIENTID)
// 402就是登录失效
const errorHandler = (error)=> {
  console.log("errorHandler -> error", error)
  const { response, data } = error;
  if (response && response.status) {
    // const { status, url } = response;
    if(response.status === 401) {
      //TODO: 提取链接出来
      setTimeout(()=>{
        window.location.href = `https://mixin-oauth.firesbox.com?client_id=${process.env.CLIENTID}&scope=PROFILE:READ&response_type=code`
      },1000)
      localStorage.removeItem('userToken');
      localStorage.removeItem('userId');
      localStorage.removeItem('userCode');
    }
    console.error(response.statusText)
  } else if (!response) {
    console.error('network error');
  }

  if(data && data.code) {
    if(data.code !== 200) {
      Toastify({
        text: `${data.msg}`,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: 'left', // `left`, `center` or `right`
        backgroundColor: "red",
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: function(){} // Callback after click
      }).showToast();
    }
  }
  return response;
};

const extendConfig = {
    prefix:process.env.BASEURL,
    errorHandler,
    credentials: 'omit'
  }
console.log('extendConfig', extendConfig)

const request = extend(extendConfig);

request.interceptors.request.use((url, options) => {
  const userToken = localStorage.getItem('userToken')
  const userId =localStorage.getItem('userId')
  return {
    url: url,
    options: {
      ...options,
      headers:{
        Authorization:userToken? ` Bearer ${userToken}`: '',
        'x-user-id': `${userId}`
      }
    },
  };
});

export default request;
