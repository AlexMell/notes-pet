import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import SetZeroButton from './SetZeroButton';

export class Counter extends PureComponent {
    render() {

        const { counter, inc, dec, rnd, mlt } = this.props;
        console.log(this.props);

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
                </div>
                <div className="row">
                    <SetZeroButton />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        counter: store.counter,
    };
};

export default connect(mapStateToProps, actions)(Counter);
