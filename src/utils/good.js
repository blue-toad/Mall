import http from "./http";

export function getGoodDetails(iid) {
  return http({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return http({
    url: '/recommend'
  })
}
//构造一个对象将后台发来的信息进行解构
export class itemInfos {
  constructor(itemInfo, columns) {
    this.iid = itemInfo.iid
    this.title = itemInfo.title
    this.discountDesc = itemInfo.discountDesc
    this.price = itemInfo.lowNowPrice
    this.oldPrice = itemInfo.oldPrice
    this.columns = columns
  }
}

export class shopInfos {
  constructor(shopInfo) {
    this.name = shopInfo.name
    this.shopLogo = shopInfo.shopLogo
    this.score = shopInfo.score
    this.services = shopInfo.services
    this.cGoods = shopInfo.cGoods
    this.cSells = shopInfo.cSells
    this.cFans = shopInfo.cFans

  }
}

//构造放在购物车中的对象
export class cartObject {
  constructor(topImages, itemInfo, shopInfo) {
    this.iid = itemInfo.iid
    this.name = shopInfo.name
    this.price = itemInfo.price
    this.image = topImages[0]
    this.title = itemInfo.title
    this.count = 0
  }

}