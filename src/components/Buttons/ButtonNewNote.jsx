import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

export class ButtonNewNote extends PureComponent {
    render() {
        const { news } = this.props;

        return (
            <button
                type="submit"
                className="btn btn-warning mr-2 d-flex"
                onClick={news}
            >
                <span className="material-icons">note_add</span>
            </button>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        currentNoteMode: store.currentNoteMode,
    };
};

export default connect(mapStateToProps, actions)(ButtonNewNote);
