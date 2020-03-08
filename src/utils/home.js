import http from "./http";

export function getHomeMultidata() {
  return http({
    url: '/home/multidata'
  })
}