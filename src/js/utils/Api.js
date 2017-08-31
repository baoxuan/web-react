import fetch from 'isomorphic-fetch';
import * as TYPES from '../constants';
import { baseUrl, API } from './config';

function receiveDone(ApiName, json) {
  return {
    type: TYPES.RECEIVE_DONE,
    ApiName,
    posts: json,
  };
}

function receiveForm(ApiName, header, json) {
  if (json.Code !== 0) {
    return {
      type: TYPES.SHOW_ERROR,
      ApiName,
      posts: json,
    };
  }
  return {
    type: TYPES.RECEIVE_FORM,
    ApiName,
    posts: json,
    header,
  };
}


export function requestGet(ApiName, headers, params) {
  const p = params || '';
  let url = baseUrl + API[ApiName];
  if (params) { // 邀请好友专用
    // url = baseUrl + "ppapi/AD/InvitorInfo?userId="+p.userid
    url = `${baseUrl}ppapi/AD/InvitorInfo?userId=${p.userid}`;
  }
  return (dispatch) => {
    dispatch({ type: TYPES.REQUEST_BEGIN, msg: '开始GET数据', ApiName });
    return fetch(url,
      {
        method: 'GET',
        headers,
      })
      .then(response => response.json())
      .then(json => dispatch(receiveDone(ApiName, json)));
  };
}

export function requestPost(ApiName, headers, params) {
  const url = baseUrl + API[ApiName];
  return (dispatch) => {
    dispatch({ type: TYPES.REQUEST_BEGIN, msg: '开始POST数据', ApiName });
    return fetch(url,
      {
        method: 'POST',
        headers,
        body: JSON.stringify(params),
      })
      .then(response => response.json())
      .then(json => dispatch(receiveDone(ApiName, json)));
  };
}

// 用于表单提交，有错误校验
export function requestPostByForm(ApiName, headers, params) {
  const url = baseUrl + API[ApiName];
  return (dispatch) => {
    dispatch({ type: TYPES.REQUEST_FORM, msg: '开始REQUEST FORM', ApiName });
    return fetch(url,
      {
        method: 'POST',
        headers,
        body: JSON.stringify(params),
      })
      .then(response => response.json())
      .then(json => dispatch(receiveForm(ApiName, headers, json)));
  };
}
