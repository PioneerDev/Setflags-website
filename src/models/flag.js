import { getFlagList,getEvidenceList } from '@SERVICES/flag'

export default {
    namespace: 'flag',
    state: {
        flagList: [],
        flagDetail: null
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
        }
    }
}