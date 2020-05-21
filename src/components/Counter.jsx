import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className="jumbotron">
            <h2 id="counter">{counter}</h2>
            <button
                id="dec"
                type="submit"
                className="btn btn-primary btn-lg"
                onClick={dec}
            >
                Dec
            </button>
            <button
                id="inc"
                type="submit"
                className="btn btn-primary btn-lg"
                onClick={inc}
            >
                Inc
            </button>
            <button
                id="rnd"
                type="submit"
                className="btn btn-primary btn-lg"
                onClick={rnd}
            >
                Random
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state,
    };
};

export default connect(mapStateToProps, actions)(Counter);
