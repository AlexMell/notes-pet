import React, { PureComponent } from 'react';
import Button from '../Buttons/Button';

export default class TopPanel extends PureComponent {
    render () {
        return (
            <div className="bg-light p-5 border-right w-100 d-flex border-bottom">
                <div className="d-flex pb-2 w-100 border-bottom">
                    <Button />
                    <Button />
                    <Button />
                </div>
            </div>
        );
    }
}
