
import { extend } from 'umi-request';

const {BASEURL:baseurl} = process.env
// 403就是登录失效
const errorHandler = (error)=> {
  const { response } = error;
  if (response && response.status) {
    // const { status, url } = response;

    console.error(response.statusText)
  } else if (!response) {
    console.error('network error');
  }
  return response;
};


const request = extend({
  prefix:baseurl,
  errorHandler,
  credentials: 'omit', 
});

export default request;