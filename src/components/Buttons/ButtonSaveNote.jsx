import React, { PureComponent } from 'react';

export default class ButtonSaveNote extends PureComponent {
    render() {

        const { saveNote, addNewItem, currentNoteObj } = this.props;

        const onClick = () => {
            saveNote(); addNewItem(currentNoteObj);
        };

        return (
            <button
                type="submit"
                className="btn btn-success mr-2 d-flex"
                onClick={onClick}
            >
                <span className="material-icons">save</span>
            </button>
        );
    }
};
