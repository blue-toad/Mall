import http from "./http";
import test from "./test"

// export function getHomeMultidata() {
//   return http({
//     url: '/home/multidata'
//   })
// }

export function getHomeMultidata() {
  return test({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return http({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}