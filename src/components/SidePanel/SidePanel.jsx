import React, { Component } from 'react';
import NoteList from '../NoteList/NoteList';

export default class SidePanel extends Component {
    render () {
        return (
            <div className="col-md-3 d-md-block bg-light border-right">
                <h3 className="pr-5 pt-5 pb-5 mb-1">Notes list</h3>
                <NoteList />
            </div>
        );
    }
}
