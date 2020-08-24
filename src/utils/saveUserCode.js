import {auth} from '@SERVICES/user'

function saveUserCode (code) {
  return new Promise ((resolve, reject)=>{
    console.log("saveUserCode -> code", code)
    let userCode = localStorage.getItem('userCode')
    console.log("saveUserCode -> userCode", userCode)
    if(!userCode ||!(code==userCode)) {
      localStorage.setItem('userCode',code)
      auth(code).then(res=>{
        if(res.code=='200') {
          localStorage.setItem('userToken',res.data.token)
          localStorage.setItem('userId', res.data.user_id)
          resolve()
        } else {
          reject()
        }
      })
    }else {
      resolve()
    }
    // let userId = localStorage.getItem('userId')
    // let userToken = localStorage.getItem('userToken')

  })
}

export default saveUserCode