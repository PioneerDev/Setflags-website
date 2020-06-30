import { getFlagList,getEvidenceList,newFlag, opFlag, getWitnessList } from '@SERVICES/flag'
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
        * getEvidenceList({payload}, {call, put}) {
            console.log("*getEvidenceList -> payload", payload)
            const {flagid} = payload
            const res = yield call (getEvidenceList,flagid)
            if(res.code === 200) {
                yield put({
                    type: 'listEvidence',
                    payload:res.data
                })
            }
        },
        * getWitness({payload}, {call, put}){
            const {flagid} = payload
            const res = yield call (getWitnessList, flagid)
            if(res.code === 200) {
                yield put({
                    type: 'listwitness',
                    payload: res.data
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
        },
        * clean({payload}, {call, put}) {
            yield put({
                type: 'cleanFn'
            })
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
        },
        listwitness(state, {payload}) {
            return {
                ...state,
                flagDetail:{...state.flagDetail,witness:[...payload]}
            }
        },
        cleanFn(state, {payload}) {
            return {
                ...state,
                flagDetail:{...state.flagDetail,witness:null,evidence:null}
            }
        }
    }
}