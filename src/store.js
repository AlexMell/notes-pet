const initialNote = {
    id: '1', // TODO: add id
    title: 'No title',
    descr: 'No description' // TODO: description
}

const store = {
    currentNoteMode: 'new',
    currentNoteObj: initialNote,
    notes: [initialNote],
};

export default store;
