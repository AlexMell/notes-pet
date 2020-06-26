import { connect } from 'react-redux';
import { addNewItemAction, saveAction, editAction, newNoteAction, changeTitleAction, changeDescrAction, transferAction, transferFirstNoteAction, findAndEditAction, findAndDeleteAction } from '../../actions/actions';
import Main from './Main';

const mapStateToProps = (store) => {
    return {
        currentNoteMode: store.currentNoteMode,
        currentNoteObj: store.currentNoteObj,
        notes: store.notes,
        title: store.currentNoteObj.title,
        descr: store.currentNoteObj.descr,
        id: store.currentNoteObj.id,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewItem: (newNote) => dispatch(addNewItemAction(newNote)),
        saveNote: () => dispatch(saveAction()),
        editNote: () => dispatch(editAction()),
        newNote: () => dispatch(newNoteAction()),
        changeDescr: (types) => dispatch(changeDescrAction(types)),
        changeTitle: (types) => dispatch(changeTitleAction(types)),
        transferToCurrentNote: (item) => dispatch(transferAction(item), () => console.log('asd')),
        transferFirstNote: dispatch(transferFirstNoteAction()),
        findAndEdit: (id) => dispatch(findAndEditAction(id)),
        findAndDelete: () => dispatch(findAndDeleteAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
