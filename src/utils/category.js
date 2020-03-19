import http from "./http";

export function getCategory() {
  return http({
    url: '/category'
  })
}

export function getSubcategory(maitKey) {
  return http({
    url: '/subcategory',
    params: {
      // 注意简写时的key值
      maitKey
    }
  })
}