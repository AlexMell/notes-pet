import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

export class ButtonEditNote extends PureComponent {
    render() {
        const { edit } = this.props;

        return (
            <button
                type="submit"
                className="btn btn-primary mr-2 d-flex"
                onClick={edit}
            >
                <span className="material-icons">create</span>
            </button>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        currentNoteMode: store.currentNoteMode,
    };
};

export default connect(mapStateToProps, actions)(ButtonEditNote);
