import { getFlagList } from '@SERVICES/flag'

export default {
    namespace: 'flag',
    state: {
        flagList: []
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
        * uploadFlag(payload, {call, put, select}) {
            const res = yield call
        }
    },
    reducers: {
        changeFlaglist(state, {payload}) {
            console.log('payload--->', payload)
            return {
                ...state,
                flagList:[...payload]
            }
        }
    }
}