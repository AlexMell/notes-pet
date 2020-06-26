import React, { PureComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NoteItemStyle from './NoteItem.module.scss';

export default class NoteItem extends PureComponent {

    render() {

        const { ItemLinkStyle } = NoteItemStyle;
        const { id, title, descr, notes, transferToCurrentNote } = this.props;

        const noteItems = notes.map((item) => {
            return (
                <div
                    key={uuidv4()}
                    id={item.id}
                    className={ItemLinkStyle}
                    onClick={() => transferToCurrentNote(item)}
                >
                    <h5 className="text-truncate">{item.title}</h5>
                    <small className="text-truncate text-muted w-100">{item.descr}</small>
                </div>
            );
        });

        const rendering = () => {
            if (notes.length) {
                return noteItems;
            } else {
                return <div
                            key={uuidv4()}
                            id={uuidv4()}
                            className={ItemLinkStyle}
                            onClick={() => transferToCurrentNote(id)}
                        >
                        <h5 className="text-truncate">{title}</h5>
                        <small className="text-truncate text-muted w-100">{descr}</small>
                </div>
            }
        }

        return (
            <div className="w-100">{rendering()}</div>
        );
    }
}