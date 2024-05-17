const defaultState = {
    count: 10,
};

export const grid = (state = defaultState, action) => {
	switch(action.type) {
        case 'PLUS_COUNT':{
            let count = state.count + 1;
            return {...state, count: count};
        }
        case 'MINUS_COUNT':{
            let count = state.count - 1;
            return {...state, count: count};
        }
        default: return state;
	}
}

export const plusCount = (payload) => ({type: 'PLUS_COUNT', payload})
export const minusCount = (payload) => ({type: 'MINUS_COUNT', payload})