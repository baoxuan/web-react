const prod = process.env.NODE_ENV !== 'production'

module.exports = {
  'BACKEND_URL': prod ? 'http://testppapi.taijishuo.com' : 'http://ppapi.ppjijin.com' 
}


// 切换开发模式和正式模式