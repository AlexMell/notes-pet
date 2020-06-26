import React, { PureComponent } from 'react';

export default class ButtonEditNote extends PureComponent {
    render() {
        const { editNote } = this.props;

        return (
            <button
                type="submit"
                className="btn btn-primary mr-2 d-flex"
                onClick={editNote}
            >
                <span className="material-icons">create</span>
            </button>
        );
    }
}
