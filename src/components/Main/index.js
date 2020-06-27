import { connect } from 'react-redux';
import {
    addNewItemAction,
    saveAction,
    editAction,
    newNoteAction,
    changeTitleAction,
    changeDescrAction,
    transferAction,
    transferFirstNoteAction,
    findAndEditAction,
    findAndDeleteAction,
} from '../../actions';
import Main from './Main';
import {getIdSelector, getTitleSelector} from '../../selectors/mainSelectors';

const mapStateToProps = (store) => {
    return {
        currentNoteMode: store.currentNoteMode,
        currentNoteObj: store.currentNoteObj,
        notes: store.notes,
        title: getTitleSelector(store),
        descr: store.currentNoteObj.descr,
        id: getIdSelector(store),
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
        transferToCurrentNote: (item) => dispatch(transferAction(item)),
        transferFirstNote: dispatch(transferFirstNoteAction()), // TODO: move logic with immediate call to the componentDidMount
        findAndEdit: (id) => dispatch(findAndEditAction(id)),
        findAndDelete: () => dispatch(findAndDeleteAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
