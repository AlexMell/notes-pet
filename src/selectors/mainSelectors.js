export const getIdSelector = (store) => {
  return store && store.currentNoteObj && store.currentNoteObj.id; // TODO: consider method get from lodash
}

export const getTitleSelector = (store) => {
  return store && store.currentNoteObj && store.currentNoteObj.title; // TODO: consider method get from lodash
}
