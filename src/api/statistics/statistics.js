
import request from '@/utils/request'
import { parseStrEmpty } from "@/utils/ruoyi";

// 按车辆类型统计
export function getCountData(query) {
  return request({
    url: '/biz/vehicle/type/count',
    method: 'get',
    // method: 'get',
    params: query
  })
}

//统计总量
export function getTotalData(query) {
  return request({
    url: '/biz/vehicle/all/count',
    method: 'get',
    // method: 'get',
    params: query
  })
}
