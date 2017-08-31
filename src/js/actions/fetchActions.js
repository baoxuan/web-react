import * as types from '../constants'
import fetch from 'isomorphic-fetch';
import { Api } from '../utils/config'

export const addCount = () => dispatch => {
  return dispatch({type: types.ADD})
}

export const deleteCount = () => dispatch => {
  return dispatch({type: types.DELETE})
}

// 请求服务端接口
export const fetch_request = (ApiName, params, methods) => dispatch => {

  const method = methods ? methods : 'GET'
  const headers = {"Content-Type": "application/json"}
  dispatch(fetchRequest(ApiName))
  
  return fetch(Api[ApiName],
    {
      method:methods,
      headers,
      body:  JSON.stringify(params)
    })
      .then(response => response.json())
      .then(json => dispatch(fetchDown(ApiName, json)));

}

// 开始请求
export const fetchRequest = (ApiName) => dispatch => {
  return dispatch ({type: types.FETCH_REQUEST, ApiName})
}
//请求结束
export const fetchDown = (ApiName, json) => dispatch => {
  return dispatch ({type: types.FETCH_DOWN, ApiName, json})
}