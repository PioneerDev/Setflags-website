import { getFlagList } from '@/services/flag'

export default {
    namespace: 'flag',
    state: {
        flagList: []
    },
    effects: {
        * getFlagList(payload, {call, put, select}) {
            const data = yield call(getFlagList)
            console.log('*getFlagList -> data', data)
        }
    }
}