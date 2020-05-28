import store from '../store';

const reducer = (state = store, action) => {
    switch (action.type) {
        case 'RND':
            return {
                ...state,
                counter: state.counter + action.payload,
            };

        case 'INC':
            return {
                ...state,
                counter: state.counter - action.payload,
            };

        case 'DEC':
            return {
                ...state,
                counter: state.counter + action.payload,
            };

        case 'MLT':
            return {
                ...state,
                counter: state.counter * action.payload,
            };

        default: {
            return state;
        }
    }
};

export default reducer;
