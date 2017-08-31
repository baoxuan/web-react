// 设置cookie
export function setCookie(name, value) {
  document.cookie = `${name}=${value}`;
  // console.log("value:"+value);
}
// 获取cookie
export function getCookie(name) {
  if (document.cookie.length > 0) {
    let ppStart = document.cookie.indexOf(`${name}=`);
    if (ppStart !== -1) {
      ppStart += name.length + 1;
      let ppEnd = document.cookie.indexOf(';', ppStart);
      if (ppEnd === -1) {
        ppEnd = document.cookie.length;
      }
      return document.cookie.substring(ppStart, ppEnd);
    }
  }
  return '';
}

// 获取随机数
export function getRandomCode() {
  let result = [];
  for (let i = 0; i < 20; i += 1) {
    const t = Math.floor(Math.random() * 10);
    result += t;
  }
  return result;
}


export function FormatMoney(s) {
  let s1 = (s !== void 0 && s !== null) && s.toString();
  if (/[^0-9\\.]/.test(s)) {
    return '';
  }
  s1 = s1.replace(/^(\d*)$/, '$1.'); // 对一个匹配的数字后面加.
  s1 = (`${s1}00`).replace(/(\d*\.\d\d)\d*/, '$1');
  s1 = s1.replace('.', ',');
  const re = /(\d)(\d{3},)/;
  while (re.test(s)) {
    s1 = s1.replace(re, '$1,$2');
  }
  s1 = s1.replace(/,(\d\d)$/, '.$1');
  return s1.replace(/^\./, '0.');
}
export function get2Decimals(decimal) {
  let decimal1 = (Math.floor(decimal * 10000) / 100).toString();
  const index = decimal1.indexOf('.');
  if (index < 0) {
    decimal1 += '.00';
  }
  while (decimal1.length <= index + 2) {
    decimal1 += '0';
  }
  return decimal;
} // 取两位小数
export function getTime(t) {
  const t1 = t && `${t.substring(0, 10)} ${t.substring(11, 16)}`;
  return t1;
}

export function getTime1(t) {
  const t1 = t && t.substring(0, 10);
  return t1;
}

export function GetURLParams(param) {
  // 获取url参数
  const params = param.search.substr(1).split('&');
  const aGets = [];
  if (params.length > 0) {
    for (let i = 0; i < params.length; i += 1) {
      const temp = params[i].split('=');
      aGets[temp[0]] = temp[1];
    }
  }
  return aGets;
}

export function h5ToApp(mobileOS, ApiName, Msg) {
  const OS = mobileOS.toLowerCase();
  if (OS === 'ios') {
    if (ApiName === 'nativeShare') {
      nativeShare(Msg);
    } else if (ApiName === 'nativeUpdateToken') {
      nativeUpdateToken(Msg);
    } else if (ApiName === 'nativeJumpPage') {
      nativeJumpPage(Msg);
    } else if (ApiName === 'nativeJump') {
      nativeJump(Msg);
    } else if (ApiName === 'nativeShowPic') {
      nativeShowPic(Msg);
    } else {
      alert(`${ApiName}is error`);
    }
  } else if (OS === 'android') {
    if (ApiName === 'nativeShare') {
      window.ppNative.nativeShare(Msg);
    } else if (ApiName === 'nativeUpdateToken') {
      window.ppNative.nativeUpdateToken(Msg);
    } else if (ApiName === 'nativeJumpPage') {
      window.ppNative.nativeJumpPage(Msg);
    } else if (ApiName === 'nativeJump') {
      window.ppNative.nativeJump(Msg);
    } else if (ApiName === 'nativeShowPic') {
      window.ppNative.nativeShowPic(Msg);
    } else {
      alert(`${ApiName}is error`);
    }
  } else {
    alert('mobileOS is error');
  }
}
