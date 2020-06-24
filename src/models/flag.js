import { getFlagList,getEvidenceList,newFlag } from '@SERVICES/flag'
import router from 'umi/router';

export default {
    namespace: 'flag',
    state: {
        flagList: [],
        flagDetail: null,
        userCode: null
    },
    effects: {
        * getFlagList(payload, {call, put, select}) {
            const res = yield call(getFlagList)
            if(res.code === 200) {
                yield put({
                    type: 'changeFlaglist',
                    payload: res.data
                })
            }
            console.log('*getFlagList -> data', res)
        },
        * getEvidenceList(payload, {call, put}) {
            const res = yield call (getEvidenceList,1)
            if(res.code === 200) {
                yield put({
                    type: 'listFlagDetail',
                    payload:res.data
                })
            }
        },
        * getUserCode(payload,{call,put}){
            yield put({
                type: 'getUserCodeFn'
            })    
        },
        * newFlag(payload, {call, put}) {
            const res = yield call(newFlag, payload)
            console.log('newflag payload--->', payload)
            if(res.code === 200) {
                router.push('/addflagsuccess')
            } else {
                router.push('/addflagfail')
            }
        }  
    },
    reducers: {
        changeFlaglist(state, {payload}) {
            console.log('payload--->', payload)
            return {
                ...state,
                flagList:[...payload]
            }
        },
        listFlagDetail(state, {payload}) {
            console.log('listFlagDetail payload--->',payload)
            return {
                ...state,
                flagDetail:[...payload]
            }
        },
        getUserCodeFn(state, {payload}) {
            const {userCode} = state
            if(!userCode) {
                window.location.href = `https://mixin.one/oauth/authorize?client_id=8e932025-b516-4099-8d3f-a8acda46d82f&scope=PROFILE:READ+ASSETS:READ&response_type=code`
            }
        }
    }
}