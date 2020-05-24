
import { extend } from 'umi-request';


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
  errorHandler,
  credentials: 'include', 
});

export default request;