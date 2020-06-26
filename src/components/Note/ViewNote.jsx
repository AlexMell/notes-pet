import React, { PureComponent } from 'react';

export default class ViewNote extends PureComponent {
    render() {
        const { title, descr, id } = this.props;

        return (
            <div id={id} className="p-5 w-100">
                <h2 className="pb-5">{title}</h2>
                <span className="w-100 d-block">{descr}</span>
            </div>
        );
    }
}
