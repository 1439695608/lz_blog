// 区分个银险
function getSellChannel () {
  if (sessionStorage.sellChannel) {
    return sessionStorage.sellChannel
  } else {
    let url = location.pathname
    if (url.indexOf('/s1/') != -1) {
      sessionStorage.sellChannel = '1'
      return '1'
    } else if (url.indexOf('/s7/') != -1) {
      sessionStorage.sellChannel = '7'
      return '7'
    } else if (url.indexOf('/s3/') != -1) {
      sessionStorage.sellChannel = '3'
      return '3'
    } else {
      console.log('app> have not sellChannel, but you can set sessionStorage.sellChannel = 1 or 3 on web console.')
      return null
    }
  }
}
// sellchannel == 1 && (agentCate == 's' || agentCate == 'c'是福拓人員
function getSellChannelByAgentCate (agentCate) {
  let sellchannel = getSellChannel()
  if (sellchannel == 1 && (agentCate == 'S' || agentCate == 'C')) {
    sellchannel = 7
  }
  return sellchannel
}
// 产品列表中含有4080的时候，如果添加了万能险4083，就不能重做计划
function getProductEnable (selectPid, universalId) {
  if (selectPid.indexOf(4080) != -1 && universalId == 4083) {
    return false
  } else {
    return true
  }
}
// 保障期 value -> text
function getCoverageTextByValue (policy) {
  let val = ''
  let id = policy.productId
  if (!id) {
    id = policy.coverPrdId
  }
  let temp = policy
  if (policy['product_' + id]) {
    temp = policy['product_' + id]
  }
  switch (Number(temp.coveragePeriod)) {
    case 1:
      val = '保终身'
      break
    case 2:
      val = '保' + temp.coverageYear + '年'
      break
    case 3:
      val = '保至' + temp.coverageYear + '岁'
      break
    default:
      val = '-'
      break
  }
  return val
}

// 交费期 value -> text
function getChargeTextByValue (policy) {
  let val = ''
  let id = policy.productId
  if (!id) {
    id = policy.coverPrdId
  }
  let temp = policy
  if (policy['product_' + id]) {
    temp = policy['product_' + id]
  }
  switch (Number(temp.chargePeriod)) {
    case 1:
      val = '趸交'
      break
    case 2:
      val = '交' + temp.chargeYear + '年'
      break
    case 3:
      val = '至' + temp.chargeYear + '岁'
      break
    default:
      val = '-'
      break
  }
  return val
}

// 字符串转Date, IOS 直接字符串转换Date有bug
function stringToDate (str) {
  let arrDate = str.split(' ')[0].replace(/-/g, '/').split('/')
  let arrTime = str.split(' ')[1].split(':')
  return new Date(arrDate[0], arrDate[1] - 1, arrDate[2], arrTime[0], arrTime[1], arrTime[2])
}

// 计算时间差
function timeDiff (t1, t2) {
  let d1 = t1
  let d2 = t2
  if (typeof t1 == 'string') {
    d1 = stringToDate(t1)
  }
  if (typeof t2 == 'string') {
    d2 = stringToDate(t2)
  }
  let millisecond = Math.abs(d1.getTime() - d2.getTime())
  let days = Math.floor(millisecond / (24 * 3600 * 1000))
  let leave1 = millisecond % (24 * 3600 * 1000)
  let hours = Math.floor(leave1 / (3600 * 1000))
  let leave2 = leave1 % (3600 * 1000)
  let minutes = Math.floor(leave2 / (60 * 1000))
  let leave3 = leave2 % (60 * 1000)
  let seconds = Math.round(leave3 / 1000)
  return {
    D: days,
    H: hours,
    M: minutes,
    S: seconds
  }
}

export {getSellChannel, timeDiff, getCoverageTextByValue, getChargeTextByValue, getSellChannelByAgentCate, getProductEnable}
