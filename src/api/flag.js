import api from './axios'

// export default {
//   // 查看flag列表
//   apiGetFlagList: params => api.get('/flag/list', { params }),
//   apiNewFlag: data => api.post('', {data})
// }

export function queryFlagListAPI(data) {
  return api({
    url: 'api/flag/queryFlagList',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      // 'Cookie': 'userId=101'
    },
    data: data
  })
}

export function newFlagAPI(data) {
  return api({
    url: 'api/flag/new',
    method: 'post',
    // headers: {
    //   'Content-Type': 'application/json'
    // },
    data: data
  })
}
// export function queryFlagList2() {
//   return api.get('api/api/flag/queryFlagList', {userId: '1', pageIndex: 1})
// }