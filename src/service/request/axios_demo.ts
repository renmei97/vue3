/*
import axios from 'axios'
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res)
})
// // 3.post请求
axios
  .post('http://httpbin.org/post', {
    data: {
      name: 'why',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  })
axios.defaults.baseURL = 'http://httpbin.org'
axios
  .all([
    axios.get('/get', { params: { name: 'why', age: 18 } }),
    axios.post('/post', { data: { name: 'why', age: 18 } })
  ])
  .then((res) => {
    console.log(res[0].data)
    console.log(res[1].data)
  })
axios.interceptors.request.use(
  (config) => {
    console.log('send success')
    return config
  },
  (err) => {
    console.log('send failure')
  }
)
axios.interceptors.response.use(
  (res) => {
    console.log('response success')
    return res
  },
  (err) => {
    console.log('response failure')
  }
)*/
