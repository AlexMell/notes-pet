import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import NoteItemStyle from './NoteItem.module.scss';

export class NoteItem extends PureComponent {
    render() {
        const { ItemLinkStyle } = NoteItemStyle;
        const { notes } = this.props;

        const noteItems = notes.map((item) => {
            return (
                <div id={item.id} key={item.id} className={ItemLinkStyle}>
                    <h5 className="text-truncate">{item.title}</h5>
                    <small className="text-truncate text-muted">{item.descr}</small>
                </div>
            );
        });

        return (
            <div className="w-100">{noteItems}</div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        title: store.currentNoteObj.title,
        descr: store.currentNoteObj.descr,
        notes: store.notes,
    };
};

export default connect(mapStateToProps)(NoteItem);
