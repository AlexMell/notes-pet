import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

export class EditNote extends PureComponent {


    render() {

        const { title, id, descr, changeTitle, changeDescr } = this.props;

        return (
            <div className="p-5 w-100">
                <div className="mb-2">Title of Note:</div>
                <input
                    type="text"
                    value={title}
                    className="pb-5 form-control mb-5"
                    onChange={e => changeTitle(e.target.value)}
                    placeholder="Type Title Note here"
                />
                <div className="mb-2">Description of Note:</div>
                <textarea
                    id={id}
                    cols="40"
                    rows="20"
                    className="w-100 d-block form-control"
                    onChange={e => changeDescr(e.target.value)}
                    defaultValue={descr} />
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        title: store.currentNoteObj.title,
        id: store.currentNoteObj.id,
        descr: store.currentNoteObj.descr,
    };
};

export default connect(mapStateToProps, actions)(EditNote);
