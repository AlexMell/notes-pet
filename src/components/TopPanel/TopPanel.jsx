import React, { PureComponent } from 'react';
import ButtonEditNote from '../Buttons/ButtonEditNote';
import ButtonSaveNote from '../Buttons/ButtonSaveNote';
import ButtonNewNote from '../Buttons/ButtonNewNote';
import ButtonDeleteNote from '../Buttons/ButtonDeleteNote';

export default class TopPanel extends PureComponent {
    render () {
        return (
            <div className="bg-light p-4 pl-5  border-right w-100 d-flex border-bottom">
                <div className="d-flex w-100">
                    <ButtonEditNote />
                    <ButtonSaveNote />
                    <ButtonNewNote />
                    <ButtonDeleteNote />
                </div>
            </div>
        );
    }
}
