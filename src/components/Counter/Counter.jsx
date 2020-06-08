import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

export class Counter extends PureComponent {
    render() {

        const { counter, currentNoteMode, inc, dec, rnd, mlt, huy } = this.props;
        console.log('this.props', this.props);

        return (
            <div className="jumbotron">
                <div className="row">
                    <h2 id="counter" className="w-100 d-block">
                        Counter: {counter}
                    </h2>
                    <button
                        id="dec"
                        type="submit"
                        className="btn btn-primary btn-lg mr-2"
                        onClick={dec}
                    >
                        Dec
                    </button>
                    <button
                        id="inc"
                        type="submit"
                        className="btn btn-primary btn-lg mr-2"
                        onClick={inc}
                    >
                        Inc
                    </button>
                    <button
                        id="rnd"
                        type="submit"
                        className="btn btn-primary btn-lg mr-2"
                        onClick={rnd}
                    >
                        Random
                    </button>
                    <button
                        id="mlt"
                        type="submit"
                        className="btn btn-primary btn-lg mr-2"
                        onClick={mlt}
                    >
                        Multiply
                    </button>
                    <button
                        id="huy"
                        type="submit"
                        className="btn btn-primary btn-lg mr-2"
                        onClick={huy}
                    >
                        huy
                    </button>
                </div>
                <h3>{currentNoteMode}</h3>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        counter: store.counter,
        currentNoteMode: store.currentNoteMode
    };
};

export default connect(mapStateToProps)(ButtonNewNote);
