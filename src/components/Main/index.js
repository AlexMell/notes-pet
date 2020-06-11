import { connect } from 'react-redux';
import { addNewItemAction, saveAction, editAction, newNoteAction, changeTitleAction, changeDescrAction } from '../../actions/actions';
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
        addNewItem: (asd) => dispatch(addNewItemAction(asd)),
        saveNote: () => dispatch(saveAction()),
        editNote: () => dispatch(editAction()),
        newNote: () => dispatch(newNoteAction()),
        changeDescr: (e) => dispatch(changeDescrAction(e.target.value)),
        changeTitle: (e) => dispatch(changeTitleAction(e.target.value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
