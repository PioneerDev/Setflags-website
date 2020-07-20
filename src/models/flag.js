import { getFlagList,getEvidenceList,newFlag, opFlag, getWitnessList,uploadEvidence,getFlagDetail,getMyflagList } from '@SERVICES/flag'
import router from 'umi/router';

export default {
    namespace: 'flag',
    state: {
        flagList: [],
        flagDetail: {witness:null,evidence:null,detailInfo:null},
        userCode: null
    },
    effects: {
        * getFlagList({payload}, {call, put, select}) {
            const res = yield call(getFlagList,payload)
            if(res.code === 200) {
                yield put({
                    type: 'changeFlaglist',
                    payload: res.data
                })
            }
            return res.total
        },
        * getMyFlagList({payload},{call, put}) {
            const res = yield call(getMyflagList,payload)
            if(res.code === 200) {
                yield put({
                    type: 'changeFlaglist',
                    payload:res.data
                })
            }
            return res.total
        },
        * getEvidenceList({payload}, {call, put}) {
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
        * getFlagDetail({payload}, {call, put}){
            const {flagid} = payload
            const res = yield call(getFlagDetail, flagid)
            if(res.code===200) {
                yield put({
                    type: 'toDetailFn',
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
            if(res.code === 200) {
                const {amount,asset,memo,recipient,trace} = res.data
                window.location.href = `mixin://pay?recipient=${recipient}&asset=${asset}&amount=${amount}&trace=${trace}&memo=${memo}`
                let flagStatus = null
                while(flagStatus !== 'PAID') {
                    const delay = timeout => {
                        return new Promise(resolve => {
                          setTimeout(resolve, timeout);
                        });
                      };
                    yield call(delay, 1500);
                    const resTwo = yield call(getFlagDetail, res.data.flag_id); 
                    flagStatus = resTwo.data.status
                    if(resTwo.data.status === 'PAID') 
                        {router.push('/addflagsuccess')} 
                    else {flagStatus = resTwo.data.status}
                    
                 }
            } else {
                router.push('/addflagfail')
            }
        },
        * toDetail({payload}, {call, put}) {
            yield put({
                type: 'toDetailFn',
                payload
            })
        },
        * opFlag({payload}, {call, put}) {
            const res = yield call(opFlag, payload)
            if(res.code===200) {
                router.push({
                    pathname: '/flagdetail',
                    query:{
                        id:payload.flagid
                    }
                  })
            } else {
                //TODO: error message
            }
        },
        * clean({payload}, {call, put}) {
            yield put({
                type: 'cleanFn'
            })
        },
        * uploadEvidence({payload}, {call, put}) {
            const res = yield call(uploadEvidence, payload)
            const flagid = payload.flagid
            if(res.code === 200) {
                const eviRes = yield call (getWitnessList, flagid)
                router.push({
                    pathname: '/flagdetail',
                    query:{
                        id:payload.flagid
                    }
                  })
                if(eviRes.code === 200) {
                    yield put({
                        type: 'listEvidence',
                        payload:eviRes.data
                    })
                }
            }
        }
    },
    reducers: {
        changeFlaglist(state, {payload}) {
            return {
                ...state,
                flagList:[...state.flagList,...payload]
            }
        },
        listEvidence(state, {payload}) {
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
                flagDetail:{...state.flagDetail,witness:null,evidence:null,detailInfo:null}
            }
        },
        clearFlagList(state, {payload}) {
            return {
                ...state,
                flagList: []
            }
        }
    }
}