import * as types from '../constants'

const posts = (state={
	isFetch:false,
	items:{}
}, action) => {
	switch (action.type){
		case types.FETCH_REQUEST:
			return Object.assign({}, state, {
				isFetch:true
			})
		case types.FETCH_DOWN:
			return Object.assign({},state,{
				isFetch: false,
				items: action.json
			}) 
	}
}

export const fetchData = (state={}, action) => {
	switch (action.type){
		case types.FETCH_REQUEST:
		case types.FETCH_DOWN:
			return Object.assign({},state,{
				[action.ApiName]:posts(state[action.ApiName], action)
			})
		default:
			return state
	}
}