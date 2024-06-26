import request from '@/utils/request'

// 查询驻区企业列表
export function listCompany(query) {
  return request({
    url: '/biz/residentCompany/list',
    method: 'get',
    params: query
  })
}

// 查询驻区企业详细
export function getCompany(companyId) {
  return request({
    url: '/biz/residentCompany/' + companyId,
    method: 'get'
  })
}

// 新增驻区企业
export function addCompany(data) {
  return request({
    url: '/biz/residentCompany',
    method: 'post',
    data: data
  })
}

// 修改驻区企业
export function updateCompany(data) {
  return request({
    url: '/biz/residentCompany',
    method: 'put',
    data: data
  })
}

// 删除驻区企业
export function delCompany(companyId) {
  return request({
    url: '/biz/residentCompany/' + companyId,
    method: 'delete'
  })
}


// 获取驻区企业代码
export function getCompanyCode(data) {
  return request({
    url: '/biz/residentCompany/nextCode',
    method: 'post',
    data: data
  })
}

//查询承运企业列表
export function listCarrierCompany(query) {
  return request({
    url: '/biz/transportCompany/list',
    method: 'get',
    params: query
  })
}