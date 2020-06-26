import React, { PureComponent } from 'react';

export default class ButtonDeleteNote extends PureComponent {
    render() {

        const { deleteNote } = this.props;

        return (
            <button
                type="submit" className="btn btn-danger mr-2 d-flex"
                onClick={deleteNote}
            >
                <span className="material-icons">delete_forever</span>
            </button>
        );
    }
}
