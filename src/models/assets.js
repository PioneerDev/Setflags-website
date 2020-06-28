import {getAssets} from '@SERVICES/assets'
export default {
  namespace: 'assets',
  state: {
    assetsInfo:null
  },
  effects: {
    * getAssetsInfo(payload, {call, put}) {
      const res = yield call(getAssets)
      if(res.code === 200) {
        yield put({
          type: 'getAssetsInfoFn',
          payload:res.data
        })
      }
    }
  },
  reducers: {
    getAssetsInfoFn(state, {payload}) {
      return {
        ...state,
        assetsInfo:payload
      }
    }
  }
}