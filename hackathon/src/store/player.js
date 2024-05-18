const defaultState = {
};

export const player = (state = defaultState, action) => {
	switch(action.type) {
        case 'SET_PLAYER':{
            return {...state, ...action}
        }
        default: return state;
	}
}

export const setPlayer = (payload) => ({type: 'SET_PLAYER', payload})