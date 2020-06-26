export const editAction = () => {
    return {
        type: "EDIT",
        payload: 'edit',
    };
};

export const newNoteAction = () => {
    return {
        type: "NEW",
        payload: 'new',
    };
};

export const saveAction = () => {
    return {
        type: "SAVE",
        payload: 'view',
    };
};

export const addNewItemAction = (newItem) => {
    return {
        type: "ADD_ITEM",
        payload: newItem
    };
};


export const changeTitleAction = (title) => {
    return {
        type: "CHANGE_TITLE",
        payload: title,
    };
};

export const changeDescrAction = (descr) => {
    return {
        type: "CHANGE_DESCR",
        payload: descr,
    };
};

export const transferAction = (note) => {
    return {
        type: "TRANSFER",
        payload: note,
    };
};

export const transferFirstNoteAction = () => {
    return {
        type: "TRANSFER_FIRST"
    };
};

export const findAndEditAction = (id) => {
    console.log(id);
    return {
        type: "FIND_AND_EDIT",
        payload: id
    };
};

export const findAndDeleteAction = () => {
    return {
        type: "FIND_AND_DELETE",
    };
};

export const addIdToItems = () => {
    return {
        type: "ADD_ID",
    };
};