// import {createStore} from "redux";

// let initialState = {
//     count: 10
// }

// const store = createStore((state = initialState, action)=>{
//     switch(action.type){
//         case 'PLUS_COUNT':{
//             let count = state.count + 1;
//             return {...state,count};
//         }
//         case 'MINUS_COUNT':{
//             let count = state.count - 1;
//             return {...state,count};
//         }
//         case 'GET_COUNT':{
//             let count = state.count;
//             return count;
//         }
//         default: return state;
//     }
// })

// export const plusCount = () => ({type: 'PLUS_COUNT',})
// export const getCount = () => ({type: 'GET_COUNT',})
// export const minusCount = () => ({type: 'MINUS_COUNT',})

// window.store = store;
// export default store

import { applyMiddleware, combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk'
import { grid } from './grid';

const rootReducer = combineReducers({
		grid: grid,
	}
);

export const store = createStore(rootReducer);