import React, { PureComponent } from 'react';

export default class NewNote extends PureComponent {
    render() {
        return (
            <div className="p-5 w-100">
                <h2 className="pb-5">Title</h2>
                <textarea
                    id=""
                    cols="30"
                    rows="10"
                    className="w-100 d-block"
                    defaultValue="VAM HUY"
                />
            </div>
        );
    }
}
