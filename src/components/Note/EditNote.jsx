import React, { PureComponent } from 'react';

export default class EditNote extends PureComponent {

    render() {

        const { title, id, descr, changeTitle, changeDescr } = this.props;

        return (
            <div className="p-5 w-100">
                <div className="mb-2">Title of Note:</div>
                <input
                    type="text"
                    value={title}
                    className="pb-5 form-control mb-5"
                    onChange={changeTitle}
                    placeholder="Type Title Note here"
                />
                <div className="mb-2">Description of Note:</div>
                <textarea
                    id={id}
                    cols="40"
                    rows="20"
                    className="w-100 d-block form-control"
                    onChange={changeDescr}
                    defaultValue={descr} />
            </div>
        );
    }
}