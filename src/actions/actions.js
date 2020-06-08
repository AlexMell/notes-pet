export const inc = () => {
    return {
        type: 'INC',
        payload: 1,
    };
};


export const dec = () => {
    return {
        type: 'DEC',
        payload: 1,
    };
};

export const rnd = () => {
    return {
        type: 'RND',
        payload: Math.floor(Math.random() * 10),
    };
};

export const mlt = () => {
    return {
        type: "MLT",
        payload: 2,
    };
};

export const edit = () => {
    return {
        type: "EDIT",
        payload: 'edit',
    };
};

export const news = () => {
    return {
        type: "NEW",
        payload: 'new',
    };
};

export const save = () => {
    return {
        type: "SAVE",
        payload: 'watch',
    };
};

export const addNewItem = (addNewItem) => {
    return {
        type: "ADD_ITEM",
        payload: addNewItem
        ,
    };
};


export const changeTitle = (title) => {
    return {
        type: "CHANGE_TITLE",
        payload: title,
    };
};

export const changeDescr = (descr) => {
    return {
        type: "CHANGE_DESCR",
        payload: descr,
    };
};