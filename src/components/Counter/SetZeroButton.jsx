import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../../actions/actions';

export default class SetZeroButton extends PureComponent {
    render() {

        // const setToZero = this.props;
        // console.log(this.props);
        
        return (
            <button
                type="submit"
                className="btn btn-success btn-lg mt-5"
            >
                Set Counter to Zero
            </button>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         counter: state,
//     };
// };

// export default connect(mapStateToProps, actions)(SetZeroButton);
