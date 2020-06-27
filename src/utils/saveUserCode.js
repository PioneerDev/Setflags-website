import {auth} from '@SERVICES/user'

const saveUserCode = (code) =>{
  return new Promise ((resolve, reject)=>{
    let userCode = localStorage.getItem('userCode')
    if(!userCode || !(code==userCode)) {
      localStorage.setItem('userCode',code)
      auth(code).then(res=>{
        if(res.code=='200') {
          localStorage.setItem('userToken',res.data.token)
          localStorage.setItem('userId', res.data.user_id)
        }
      })
    }
    // let userId = localStorage.getItem('userId')
    // let userToken = localStorage.getItem('userToken')

  })
}

export default saveUserCode