
import { extend } from 'umi-request';
import Toastify from 'toastify-js'

const {BASEURL:baseurl} = process.env
// 402就是登录失效
const errorHandler = (error)=> {
  console.log("errorHandler -> error", error)
  const { response, data } = error;
  if (response && response.status) {
    // const { status, url } = response;
    if(response.status === 401) {
      //TODO: 提取链接出来
      setTimeout(()=>{
        window.location.href = `https://mixin.one/oauth/authorize?client_id=bcec843a-d431-4bf0-8e82-cc10079d20ac&scope=PROFILE:READ+ASSETS:READ&response_type=code`
      },10000)
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
        duration: 30000, 
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

const request = extend({
  prefix:baseurl,
  errorHandler,
  credentials: 'omit'
});

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