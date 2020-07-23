
import { extend } from 'umi-request';

const {BASEURL:baseurl} = process.env
// 402就是登录失效
const errorHandler = (error)=> {
  console.log("errorHandler -> error", error)
  const { response } = error;
  if (response && response.status) {
    // const { status, url } = response;
    if(response.status === 401) {
      //TODO: 提取链接出来
      setTimeout(()=>{
        window.location.href = `https://mixin.one/oauth/authorize?client_id=bcec843a-d431-4bf0-8e82-cc10079d20ac&scope=PROFILE:READ+ASSETS:READ&response_type=code`
      },1000)

    }
    console.error(response.statusText)
  } else if (!response) {
    console.error('network error');
  }
  return response;
};

const userToken = localStorage.getItem('userToken')
const userId =localStorage.getItem('userId')
const request = extend({
  prefix:baseurl,
  errorHandler,
  credentials: 'omit', 
  headers:{
    Authorization:userToken ? ` Bearer ${userToken}`: '',
    'x-user-id': `${userId}`
  }
});

export default request;