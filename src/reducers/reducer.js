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

    case 'EDIT':
        return {
            ...state,
            currentNoteMode: action.payload,
        };

    case 'SAVE':
        return {
            ...state,
            currentNoteMode: action.payload,
        };

    case 'ADD_ITEM':
        return {
            ...state,
            notes: [...state.notes, action.payload],
        };

    case 'NEW':
        return {
            ...state,
            currentNoteMode: action.payload,
        };

    case 'CHANGE_TITLE':
        return {
            ...state,
            currentNoteObj: {
                ...state.currentNoteObj,
                title: action.payload,
            },
        };

    case 'CHANGE_DESCR':
        return {
            ...state,
            currentNoteObj: {
                ...state.currentNoteObj,
                descr: action.payload
            },
        };

        default: {
            return state;
        }
    }
};

export default reducer;
