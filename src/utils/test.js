import Axios from 'axios'

export default function axios(config) {
  const instance = Axios.create({
    baseURL: 'http://rap2.taobao.org:38080/app/mock/248273/get',
    timeout: 5000,
  })
  instance.interceptors.response.use(response => {
    // console.log('来到了response拦截success中');
    return response.data
  }, err => {
    console.log('来到了response拦截failure中');
    console.log(err);
    return err
  })

  return instance(config)
}
