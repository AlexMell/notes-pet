import React, { PureComponent } from 'react';
import ButtonEditNote from '../Buttons/ButtonEditNote';
import ButtonSaveNote from '../Buttons/ButtonSaveNote';
import ButtonNewNote from '../Buttons/ButtonNewNote';
import ButtonDeleteNote from '../Buttons/ButtonDeleteNote';

export default class TopPanel extends PureComponent {
    render () {

        const { currentNoteObj, saveNote, addNewItem, editNote, newNote } = this.props;

        return (
            <div className="bg-light p-4 pl-5  border-right w-100 d-flex border-bottom">
                <div className="d-flex w-100">
                    <ButtonEditNote editNote={editNote} />
                    <ButtonSaveNote currentNoteObj={currentNoteObj} saveNote={saveNote} addNewItem={addNewItem}/>
                    <ButtonNewNote newNote={newNote} />
                    <ButtonDeleteNote />
                </div>
            </div>
        );
    }
}
