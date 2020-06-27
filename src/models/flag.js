import { getFlagList,getEvidenceList,newFlag, opFlag } from '@SERVICES/flag'
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
                    type: 'listEvidence',
                    payload:res.data
                })
            }
        },
        * getUserCode(payload,{call,put}){
            yield put({
                type: 'getUserCodeFn'
            })    
        },
        * newFlag({payload}, {call, put}) {
            const res = yield call(newFlag, payload)
            console.log('newflag payload--->', payload)
            if(res.code === 200) {
                router.push('/addflagsuccess')
            } else {
                router.push('/addflagfail')
            }
        },
        * toDetail({payload}, {call, put}) {
            console.log("*toDetail -> payload", payload)
            yield put({
                type: 'toDetailFn',
                payload
            })
        },
        * opFlag({payload}, {call, put}) {
            const res = yield call(opFlag, payload)
            if(res.code===200) {
                console.log('已见证')
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
        listEvidence(state, {payload}) {
            console.log('listFlagDetail payload--->',payload)
            return {
                ...state,
                flagDetail:{...state.flagDetail,evidence:[...payload]}
            }
        },
        getUserCodeFn(state, {payload}) {
            const userCode = localStorage.getItem('userCode')
            if(!userCode) {
                window.location.href = `https://mixin.one/oauth/authorize?client_id=bcec843a-d431-4bf0-8e82-cc10079d20ac&scope=PROFILE:READ+ASSETS:READ&response_type=code`
            }
        },
        toDetailFn(state, {payload}) {
            console.log("toDetailFn -> state", state)
            console.log("toDetailFn -> payload", payload)
            return {
                ...state,
                flagDetail:{...state.flagDetail,detailInfo:{...payload}}
            }
        }
    }
}