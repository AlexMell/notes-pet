import React, { PureComponent } from 'react';

export default class ButtonNewNote extends PureComponent {
    render() {
        const { newNoteEvent } = this.props;

        return (
            <button
                type="submit"
                className="btn btn-warning mr-2 d-flex"
                onClick={newNoteEvent}
            >
                <span className="material-icons">note_add</span>
            </button>
        );
    }
}
