import {getUserInfo} from '@SERVICES/user'
export default {
  namespace: 'user',
  state: {
    userInfo:null
  },
  effects: {
    * getUserInfo(payload,{call,put}) {
      const res = yield call(getUserInfo)
      if(res.code === 200) {
        yield put({
          type: 'getUserInfoFn',
          payload:res.data
        })
      }
    },
    reducers: {
      getUserInfoFn(state, {payload}) {
        return {
          ...state,
          userInfo: {...payload}
        }
      }
    }
  }

}