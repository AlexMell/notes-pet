import React, { PureComponent } from 'react';
import NoteList from '../NoteList/NoteList';

export default class SidePanel extends PureComponent {
    render() {
        const { notes, transferToCurrentNote } = this.props;

        return (
            <div className="col-md-3 d-md-block bg-light border-right">
                <h3 className="pr-4 pt-4 pb-4">Notes list</h3>
                <NoteList
                    notes={notes}
                    transferToCurrentNote={transferToCurrentNote}
                />
            </div>
        );
    }
}
