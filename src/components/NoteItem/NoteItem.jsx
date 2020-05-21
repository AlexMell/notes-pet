import React, { Component } from 'react';
import NoteItemStyle from './NoteItem.module.scss';

export default class NoteItem extends Component {


    render () {
        
        const { ItemLinkStyle } = NoteItemStyle;
    
        return (
            <div className={ ItemLinkStyle }>
                NoteItem here
            </div>
        );
    }
}
