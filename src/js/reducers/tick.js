import * as types from '../constants'

const InitialState = {
	count: 0
}

export const tick = (state=InitialState, action) => {
	switch(action.type){
		case types.ADD:
			return Object.assign({}, state, {count: state.count+1})
		case types.DELETE:
			return Object.assign({},state, {count: state.count-1})
		default:
			return state
	}
}