import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import SidePanel from '../SidePanel/SidePanel';
import TopPanel from '../TopPanel/TopPanel';
import EditNote from '../Note/EditNote';
import NewNote from '../Note/NewNote';
import ViewNote from '../Note/ViewNote';

export class Main extends PureComponent {
    
    render() {
        
        const { currentNoteMode } = this.props;
        console.log('currentNodeMode', currentNoteMode);

        const updateNote = () => {
            if (currentNoteMode === 'edit') {
                return <EditNote />;
            } else if (currentNoteMode === 'watch') {
                return <ViewNote />
            } else if (currentNoteMode === 'new') {
                return <NewNote />;
            }
        };
        
        return (
            <div className="container-fluid">
                <div className="row h-100">
                    <SidePanel />
                    <main className="col-md-9">
                        <div className="row">
                            <TopPanel />
                        </div>
                        <div className="row">
                            {updateNote()}
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        currentNoteMode: store.currentNoteMode,
    };
};

export default connect(mapStateToProps)(Main);
