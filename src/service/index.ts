import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
        console.log(677, token)
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('2')
      return err
    },
    responseInterceptor: (res) => {
      const data = res.data
      if (data.returnCode === '-1001') {
        console.log('failure')
      } else {
        return data
      }
    },
    responseInterceptorCatch: (err) => {
      if (err.response.status === 404) {
        console.log('404')
      }
      return err
    }
  }
})
export default hyRequest
