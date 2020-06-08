import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

export class ViewNote extends PureComponent {
    render() {
        const { title, id, descr } = this.props;

        return (
            <div className="p-5 w-100">
                <h2 className="pb-5">{title}</h2>
                <span
                    id={id}
                    className="w-100 d-block">
                    {descr}
                </span>
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

export default connect(mapStateToProps)(ViewNote);
