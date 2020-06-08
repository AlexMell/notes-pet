import React, { Component } from 'react';
import NoteItem from '../NoteItem/NoteItem';

export default class NoteList extends Component {
    render () {
        return (
            <div className="row">
                <NoteItem />
            </div>
        )
    }
}