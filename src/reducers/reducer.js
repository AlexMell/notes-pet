import store from '../store';

const updateNoteItems = (noteItems, note, index) => {
    if (index === -1) {
        return [
            ...noteItems,
            note
        ];
    }

    return [
        ...noteItems.slice(0, index),
        note,
        ...noteItems.slice(index + 1)
    ]
}

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
            currentNoteObj: action.payload,
            notes: [...state.notes, action.payload ],
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

    case 'TRANSFER':
        return {
            ...state,
            currentNoteMode: 'view',
            currentNoteObj: action.payload
        };

    case 'TRANSFER_FIRST':
        return {
            ...state,
            currentNoteObj: state.notes[0]
        };

    case 'FIND_AND_EDIT':
        const itemId = state.currentNoteObj.id;
        const noteIndex = state.notes.findIndex(({id}) => id === itemId);
        const note = state.notes[noteIndex];
        
        let newItem;

        if(note) {
            newItem = {
                ...note,
                title: state.currentNoteObj.title,
                descr: state.currentNoteObj.descr,
            };
        } else {
            newItem = {
                id: note.id,
                title: note.title,
                descr: note.descr
            };
        }

        return {
            ...state,
            notes: updateNoteItems(state.notes, newItem, noteIndex),
        }

    case 'FIND_AND_DELETE':
        const array = state.notes; // make a separate copy of the array
        const idNote = state.currentNoteObj.id;
        const findNote = state.notes.find((item) => item.id === idNote);
        const index = array.indexOf(findNote)

        if (index !== -1) {
            array.splice(index, 1);
        }

        return {
            ...state,
            currentNoteObj: state.notes[0]
        }


    case 'ADD_ID':
        return {
            ...state,
            notes: [
                ...state.notes
            ]
        }

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
