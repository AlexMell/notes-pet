import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

export class ButtonSaveNote extends PureComponent {
    render() {

        const { save, currentNoteObj, addNewItem } = this.props;

        return (
            <button
                type="submit"
                className="btn btn-success mr-2 d-flex"
                onClick={() => { save(); addNewItem(currentNoteObj);}}
            >
                <span className="material-icons">save</span>
            </button>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        currentNoteMode: store.currentNoteMode,
        currentNoteObj: store.currentNoteObj,
    };
};

export default connect(mapStateToProps, actions)(ButtonSaveNote);
