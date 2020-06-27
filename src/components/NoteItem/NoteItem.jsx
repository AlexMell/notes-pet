import React, { PureComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NoteItemStyle from './NoteItem.module.scss';

export default class NoteItem extends PureComponent {
    render() {
        const { ItemLinkStyle } = NoteItemStyle;
        const { notes, transferToCurrentNote } = this.props;

        const noteItems = notes.map((item) => {
            return (
                <div
                    key={uuidv4()} // TODO: key can be id. Id unique, isnt it?
                    id={item.id}
                    className={ItemLinkStyle}
                    onClick={() => transferToCurrentNote(item)}
                >
                    <h5 className="text-truncate">{item.title}</h5>
                    <small className="text-truncate text-muted w-100">
                        {item.descr}
                    </small>
                </div>
            );
        });

        return <div className="w-100">{noteItems}</div>;
    }
}
