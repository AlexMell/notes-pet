import React, { PureComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NoteItemStyle from './NoteItem.module.scss';

export default class NoteItem extends PureComponent {

    render() {

        const { ItemLinkStyle } = NoteItemStyle;
        const { notes } = this.props;

        const noteItems = notes.map((item) => {
            return (
                <div id={uuidv4()} key={uuidv4()} className={ItemLinkStyle}>
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