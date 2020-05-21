import React, { PureComponent } from 'react';
import SidePanel from '../SidePanel/SidePanel';
import TopPanel from '../TopPanel/TopPanel';
import NewNote from '../Note/NewNote';

export default class Main extends PureComponent {
    render() {
        return (
            <div className="container-fluid">
                <div className="row h-100">
                    <SidePanel />
                    <main className="col-md-9">
                        <div className="row">
                            <TopPanel />
                        </div>
                        <div className="row">
                            <NewNote />
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}
