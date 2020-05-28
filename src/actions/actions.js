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