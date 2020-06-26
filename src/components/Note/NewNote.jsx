import React, { PureComponent } from 'react';

export default class NewNote extends PureComponent {
    render() {
        
        const { title, id, descr, changeTitle, changeDescr, findAndEdit } = this.props;

        const typeTitle = (e) => {
            changeTitle(e.target.value);
            findAndEdit(id);
        } 

        const typeDescr = (e) => {
            changeDescr(e.target.value);
            findAndEdit(id);
        }

        return (
            <div className="p-5 w-100">
                <div className="mb-2">Title of Note:</div>
                <input
                    type="text"
                    value={title}
                    className="pb-5 form-control mb-5"
                    onChange={typeTitle}
                    placeholder="Type Title Here"
                />
                <div className="mb-2">Description of Note:</div>
                <textarea
                    cols="40"
                    rows="20"
                    className="w-100 d-block form-control"
                    onChange={typeDescr}
                    placeholder='Type Description Here'
                    value={descr}
                />
            </div>
        );
    }
}