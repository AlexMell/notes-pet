import React, { Component } from 'react';
import NoteItem from '../NoteItem/NoteItem';

export default class NoteList extends Component {
    render() {
        const { notes, transferToCurrentNote } = this.props;

        return (
            <div className="row">
                <NoteItem notes={notes} transferToCurrentNote={transferToCurrentNote} />
            </div>
        );
    }
}
