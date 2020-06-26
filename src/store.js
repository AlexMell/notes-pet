const store = {
    currentNoteMode: 'view',
    currentNoteObj: {
        id: '1',
        title: 'Initial Note',
        descr: 'Initial Description',
    },
    notes: [
        {
            id: '1',
            title: 'Привет Антон',
            descr: 'Антон, тут походу все работает, код - говнокод, но я пока не разобрался как сделать так чтоб начальная страница была пустой т.е. без заметок и с new шаблоном, не могу придумать код для этого. И еще проблема когда удаляешь все заметки нах - то все ломается. Ну остальное обсудим на митинге. Спасибо.',
        },
        {
            id: '2',
            title: 'Initial Note',
            descr: 'Initial Description',
        },
        {
            id: '3',
            title: 'Initial Note',
            descr: 'Initial Description',
        }
    ],
};

export default store;
