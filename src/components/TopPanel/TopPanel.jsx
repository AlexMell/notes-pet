import React, { PureComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ButtonEditNote from '../Buttons/ButtonEditNote';
import ButtonSaveNote from '../Buttons/ButtonSaveNote';
import ButtonNewNote from '../Buttons/ButtonNewNote';
import ButtonDeleteNote from '../Buttons/ButtonDeleteNote';

export default class TopPanel extends PureComponent {
    render () {

        const { currentNoteObj, saveNote, addNewItem, editNote, newNote, currentNoteMode, findAndDelete } = this.props;

        const newNoteEvent = () => {
            newNote(); 
            addNewItem({
                title: '',
                descr: '',
                id: uuidv4(),
            });
        }

        const deleteNote = () => {
            findAndDelete();
        }
        
        const updateButtons = () => {
            if (currentNoteMode === 'edit') {
                return <div className="d-flex w-100">
                            <ButtonSaveNote currentNoteObj={currentNoteObj} saveNote={saveNote}/>
                            <ButtonDeleteNote deleteNote={deleteNote}/>
                        </div>
            } else if (currentNoteMode === 'view') {
                return  <div className="d-flex w-100">
                            <ButtonEditNote editNote={editNote}/>
                            <ButtonNewNote newNoteEvent={newNoteEvent} />
                            <ButtonDeleteNote deleteNote={findAndDelete}/>
                        </div>
            } else if (currentNoteMode === 'new') {
                return <div className="d-flex w-100">
                            <ButtonSaveNote currentNoteObj={currentNoteObj} saveNote={saveNote}/>
                            <ButtonDeleteNote deleteNote={deleteNote}/>
                        </div>
            }
        };

        return (
            <div className="bg-light p-4 pl-5 border-right w-100 d-flex border-bottom">{updateButtons()}</div>
        );
    }
}
