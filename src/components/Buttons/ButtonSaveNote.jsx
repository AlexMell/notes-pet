import React, { PureComponent } from 'react';

export default class ButtonSaveNote extends PureComponent {
    render() {
        const { saveNote } = this.props;

        return (
            <button
                type="submit"
                className="btn btn-success mr-2 d-flex"
                onClick={saveNote}
            >
                <span className="material-icons">save</span>
            </button>
        );
    }
}
