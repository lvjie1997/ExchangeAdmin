/* eslint-disable */
import request from '@/utils/request'
/*==========================================================
 *                    
 ==========================================================*/
/**
 * 投资人列表
 * request: /hex_exchange_service/index.php/admin/investors/list
 * method: POST
 * @param userProfileId - 
 * @param limit - 单页数量
 * @param page - 页数
 * @param name - 
 * @param email - 
 * @param xApp - 平台Key
 */
export const postHexExchangeServiceIndexPhpAdminInvestorsList = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/investors/list';
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      //'Content-Type': 'application/multipart/form-data'  
    }
  })
}
/**
 * 投资人添加
 * request: /hex_exchange_service/index.php/admin/investors/add
 * method: POST
 * @param name - 
 * @param idCardNumber - 
 * @param password - 
 * @param email - 
 * @param userProfileId - 
 * @param xApp - 平台Key
 */
export const postHexExchangeServiceIndexPhpAdminInvestorsAdd = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/investors/add';
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}
/**
 * 投资人编辑
 * request: /hex_exchange_service/index.php/admin/investors/edit
 * method: POST
 * @param id - 
 * @param name - 
 * @param idCardNumber - 
 * @param password - 
 * @param email - 
 * @param xApp - 平台Key
 */
export const postHexExchangeServiceIndexPhpAdminInvestorsEdit = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/investors/edit';
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}
/**
 * 投资人删除
 * request: /hex_exchange_service/index.php/admin/investors/delete
 * method: POST
 * @param id - 
 * @param xApp - 平台Key
 */
export const postHexExchangeServiceIndexPhpAdminInvestorsDelete = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/investors/delete';
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}
/**
 * 投资人获取
 * request: /hex_exchange_service/index.php/admin/investors/get
 * method: POST
 * @param id - 
 * @param xApp - 平台Key
 */
export const postHexExchangeServiceIndexPhpAdminInvestorsGet = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/investors/get';
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}
/**
 * 投资人添加证券拥有数量
 * request: /hex_exchange_service/index.php/admin/investors/history/add
 * method: POST
 * @param investors - 
 * @param securitiesCompanyId - 证券id
 * @param xApp - 平台Key
 */
export const postHexExchangeServiceIndexPhpAdminInvestorsHistoryAdd = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/investors/history/add';
  if (bodyParams['investors'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: investors'))
  }
  if (bodyParams['securitiesCompanyId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: securitiesCompanyId'))
  }
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}
/**
 * 投资人添加证券拥有数量更改
 * request: /hex_exchange_service/index.php/admin/investors/history/edit
 * method: POST
 * @param id - 
 * @param quantity - 
 * @param xApp - 平台Key
 */
export const postHexExchangeServiceIndexPhpAdminInvestorsHistoryEdit = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/investors/history/edit';
  if (bodyParams['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (bodyParams['quantity'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: quantity'))
  }
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}
/**
 * 证券列表
 * request: /hex_exchange_service/index.php/admin/securitied/company/list
 * method: POST
 * @param status - Y/N Y代表已经通过审核 N代表未通过
 * @param limit - 单页数量
 * @param page - 页数
 * @param name - 证券名称
 * @param code - 证券代码
 * @param xApp - 平台Key
 */
export const postHexExchangeServiceIndexPhpAdminSecuritiedCompanyList = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/securitied/company/list';
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
/**
 * 证券添加
 * request: /hex_exchange_service/index.php/admin/securitied/company/add
 * method: POST
 * @param name - 证券名称
 * @param code - 证券代码
 * @param desc - 证券简介
 * @param publishQuantity - 证券发行数量 如 100000.00
 * @param publishTime - 证券发行时间 如 2019-01-01 00:00:00
 * @param minUnit - 最小单位 如 100000.00
 * @param minSubUnit - 最小认购单位 如 100000.00
 * @param elementUrl - 证券详情 如 detail.pdf
 * @param contractUrl - 合同 如 detail.pdf
 * @param signatureIssuerId - 发行方
 * @param signatureLaywerId - 签名方 律师
 * @param lockPeried - 闭锁期 月份为单位
 * @param discount - 优惠折扣 百分比 如 50.00 即为折扣50%
 * @param investors - 
 * @param xApp - 平台Key
 */
export const postHexExchangeServiceIndexPhpAdminSecuritiedCompanyAdd = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/securitied/company/add';
  // if (bodyParams['name'] === undefined) {
  //   return Promise.reject(new Error('Missing required  parameter: name'))
  // }
  // if (bodyParams['code'] === undefined) {
  //   return Promise.reject(new Error('Missing required  parameter: code'))
  // }
  // if (bodyParams['desc'] === undefined) {
  //   return Promise.reject(new Error('Missing required  parameter: desc'))
  // }
  // if (bodyParams['publishQuantity'] === undefined) {
  //   return Promise.reject(new Error('Missing required  parameter: publishQuantity'))
  // }
  // if (bodyParams['publishTime'] === undefined) {
  //   return Promise.reject(new Error('Missing required  parameter: publishTime'))
  // }
  // if (bodyParams['minUnit'] === undefined) {
  //   return Promise.reject(new Error('Missing required  parameter: minUnit'))
  // }
  // if (bodyParams['minSubUnit'] === undefined) {
  //   return Promise.reject(new Error('Missing required  parameter: minSubUnit'))
  // }
  // if (bodyParams['elementUrl'] === undefined) {
  //   return Promise.reject(new Error('Missing required  parameter: elementUrl'))
  // }
  // if (bodyParams['contractUrl'] === undefined) {
  //   return Promise.reject(new Error('Missing required  parameter: contractUrl'))
  // }
  // if (bodyParams['signatureIssuerId'] === undefined) {
  //   return Promise.reject(new Error('Missing required  parameter: signatureIssuerId'))
  // }
  // if (bodyParams['signatureLaywerId'] === undefined) {
  //   return Promise.reject(new Error('Missing required  parameter: signatureLaywerId'))
  // }
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
/**
 * 证券获取
 * request: /hex_exchange_service/index.php/admin/securitied/company/get
 * method: POST
 * @param id - 
 * @param xApp - 平台Key
 */
export const postHexExchangeServiceIndexPhpAdminSecuritiedCompanyGet = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/securitied/company/get';
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}
/**
 * 发行方列表
 * request: /hex_exchange_service/index.php/admin/signature/issuer/list
 * method: POST
 * @param userProfileId - 
 * @param limit - 单页数量
 * @param page - 页数
 * @param name - 
 * @param email - 
 * @param xApp - 平台Key
 */
export const postHexExchangeServiceIndexPhpAdminSignatureIssuerList = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/signature/issuer/list';
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',      
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}
/**
 * 发行方添加
 * request: /hex_exchange_service/index.php/admin/signature/issuer/add
 * method: POST
 * @param name - 
 * @param email - 
 * @param userProfileId - 
 * @param xApp - 平台Key
 */
export const postHexExchangeServiceIndexPhpAdminSignatureIssuerAdd = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/signature/issuer/add';
  if (bodyParams['name'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: name'))
  }
  if (bodyParams['email'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: email'))
  }
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}
/**
 * 发行方删除
 * request: /hex_exchange_service/index.php/admin/signature/issuer/delete
 * method: POST
 * @param id - 
 * @param xApp - 平台Key
 */
export const postHexExchangeServiceIndexPhpAdminSignatureIssuerDelete = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/signature/issuer/delete';
  if (bodyParams['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}
/**
 * 发行方获取
 * request: /hex_exchange_service/index.php/admin/signature/issuer/get
 * method: POST
 * @param id - 
 * @param xApp - 平台Key
 */
export const postHexExchangeServiceIndexPhpAdminSignatureIssuerGet = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/signature/issuer/get';
  if (bodyParams['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}
/**
 * 律师列表
 * request: /hex_exchange_service/index.php/admin/signature/laywer/list
 * method: POST
 * @param userProfileId - 
 * @param limit - 单页数量
 * @param page - 页数
 * @param name - 
 * @param email - 
 * @param xApp - 平台Key
 */
export const postHexExchangeServiceIndexPhpAdminSignatureLaywerList = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/signature/lawyer/list';
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}
/**
 * 律师添加
 * request: /hex_exchange_service/index.php/admin/signature/laywer/add
 * method: POST
 * @param name - 
 * @param email - 
 * @param userProfileId - 
 * @param xApp - 平台Key
 */
export const postHexExchangeServiceIndexPhpAdminSignatureLaywerAdd = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/signature/laywer/add';
  if (bodyParams['name'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: name'))
  }
  if (bodyParams['email'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: email'))
  }
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}
/**
 * 律师删除
 * request: /hex_exchange_service/index.php/admin/signature/laywer/delete
 * method: POST
 * @param id - 
 * @param xApp - 平台Key
 */
export const postHexExchangeServiceIndexPhpAdminSignatureLaywerDelete = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/signature/laywer/delete';
  if (bodyParams['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}
/**
 * 律师获取
 * request: /hex_exchange_service/index.php/admin/signature/laywer/get
 * method: POST
 * @param id - 
 * @param xApp - 平台Key
 */
export const postHexExchangeServiceIndexPhpAdminSignatureLaywerGet = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/signature/laywer/get';
  // if (bodyParams['id'] === undefined) {
  //   return Promise.reject(new Error('Missing required  parameter: id'))
  // }
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}

/**
 * 证券详情上传PDF
 * request: /hex_exchange_service/index.php/admin/securitied/element/upload
 * method: POST
 * @param elementFile - 
 * @param xAuthorization - 管理员Token
 * @param xApp - 平台Key
 * @param xVersion - API版本
 */
export const postHexExchangeServiceIndexPhpAdminSecuritiedElementUpload = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/securitied/element/upload';
  // if (bodyParams['elementFile'] === undefined) {
  //   return Promise.reject(new Error('Missing required  parameter: elementFile'))
  // }
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      
      
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}

/**
 * 证券相关合同上传PDF
 * request: /hex_exchange_service/index.php/admin/securitied/contract/upload
 * method: POST
 * @param contractFile - 
 * @param xAuthorization - 管理员Token
 * @param xApp - 平台Key
 * @param xVersion - API版本
 */
export const postHexExchangeServiceIndexPhpAdminSecuritiedContractUpload = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/securitied/contract/upload';
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      
      
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}
export const postHexAccountServiceIndexPhpAdminuserLogin = function(bodyParams) {
  let path = '/hex_account_service/index.php/adminuser/login';
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      
      // 'X-version':'1.0.0'
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}

/**
 * 用户列表
 * request: /hex_exchange_service/index.php/admin/user/list
 * method: POST
 * @param userProfileId - 
 * @param email - 
 * @param name - 
 * @param userType - 
 * @param limit - 单页数量
 * @param page - 页数
 * @param xAuthorization - 管理员Token
 * @param xApp - 平台Key
 * @param xVersion - API版本
 */
export const postHexExchangeServiceIndexPhpAdminUserList = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/user/list';
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}

/**
 * 用户类型列表
 * request: /hex_exchange_service/index.php/admin/user/type/list
 * method: POST
 * @param xAuthorization - 管理员Token
 * @param xApp - 平台Key
 * @param xVersion - API版本
 */
export const postHexExchangeServiceIndexPhpAdminUserTypeList = function() {
  let path = '/hex_exchange_service/index.php/admin/user/type/list';
  return request({
    url: path,
    method: 'POST',
  })
}

/**
 * 用户添加
 * request: /hex_exchange_service/index.php/admin/user/add
 * method: POST
 * @param name - 
 * @param idCardNumber - 
 * @param password - 
 * @param email - 
 * @param userType - ISSUER,INVESTORS,LAWYER
 * @param xAuthorization - 管理员Token
 * @param xApp - 平台Key
 * @param xVersion - API版本
 */
export const postHexExchangeServiceIndexPhpAdminUserAdd = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/user/add';
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}
export const postHexExchangeServiceIndexPhpAdminUserGet = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/user/get';
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}
/**
 * 用户编辑
 * request: /hex_exchange_service/index.php/admin/user/edit
 * method: POST
 * @param id - 
 * @param userType - 
 * @param name - 
 * @param idCardNumber - 
 * @param password - 
 * @param xAuthorization - 管理员Token
 * @param xApp - 平台Key
 * @param xVersion - API版本
 */
export const postHexExchangeServiceIndexPhpAdminUserEdit = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/user/edit';
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}
/**
 * 用户删除
 * request: /hex_exchange_service/index.php/admin/user/delete
 * method: POST
 * @param id - 
 * @param userType - 
 * @param xAuthorization - 管理员Token
 * @param xApp - 平台Key
 * @param xVersion - API版本
 */
export const postHexExchangeServiceIndexPhpAdminUserDelete = function(bodyParams) {
  let path = '/hex_exchange_service/index.php/admin/user/delete';
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}

/**
 * 审核kyc
 * request: /hex_account_service/index.php/admin/kyc/approve
 * method: POST
 * @param userProfileId - 用户id
 * @param isApprove - 是否审核通过('Y', 'N')
 * @param xAuthorization - 管理员Token
 * @param xApp - 平台Key
 * @param xVersion - API版本
 */
export const postHexAccountServiceIndexPhpAdminKycApprove = function(bodyParams) {
  let path = '/hex_account_service/index.php/admin/kyc/approve';
  return request({
    url: path,
    method: 'POST',
    data: bodyParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      //'Content-Type': 'application/multipart/form-data'
    }
  })
}