import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

export class Counter extends PureComponent {
    render() {
        return (
            <div> {currentNoteMode} </div>;
        )
    }
}

const mapStateToProps = (store) => {
    return {
        counter: store.counter,
    };
};

export default connect(mapStateToProps, actions)(Counter);
