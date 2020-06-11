import store from '../store';

const reducer = (state = store, action) => {
    switch (action.type) {

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
                descr: action.payload,
            },
        };

        default: {
            return state;
        }
    }
};

export default reducer;
