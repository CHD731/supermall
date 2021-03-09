import {request} from './request';
export function getHomedata(id) {
    return request({
        url: '/user',
        params: {
            id
        }
    })
}
export function getRecommend() {
    return request({
        url: '/home/recommend'
    })
}
export function getGoodsList() {
    return request({
        url: '/home/goods'
    })
}
