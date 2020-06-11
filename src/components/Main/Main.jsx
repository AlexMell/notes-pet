import React, { PureComponent } from 'react';
import SidePanel from '../SidePanel/SidePanel';
import TopPanel from '../TopPanel/TopPanel';
import EditNote from '../Note/EditNote';
import NewNote from '../Note/NewNote';
import ViewNote from '../Note/ViewNote';

export default class Main extends PureComponent {
    render() {
        const {
            currentNoteMode,
            currentNoteObj,
            addNewItem,
            saveNote,
            editNote,
            notes,
            newNote,
            title,
            id,
            descr,
            changeTitle,
            changeDescr
        } = this.props;

        console.log('notes', notes)

        const updateNote = () => {
            if (currentNoteMode === 'edit') {
                return <EditNote title={title} descr={descr} id={id} changeTitle={changeTitle} changeDescr={changeDescr} />;
            } else if (currentNoteMode === 'view') {
                return <ViewNote title={title} descr={descr} id={id} />;
            } else if (currentNoteMode === 'new') {
                return <NewNote  title={title} descr={descr} id={id} />;
            }
        };

        return (
            <div className="container-fluid">
                <div className="row h-100">
                    <SidePanel notes={notes} />
                    <main className="col-md-9">
                        <div className="row">
                            <TopPanel
                                currentNoteObj={currentNoteObj}
                                saveNote={saveNote}
                                editNote={editNote}
                                addNewItem={addNewItem}
                                newNote={newNote}
                            />
                        </div>
                        <div className="row">{updateNote()}</div>
                    </main>
                </div>
            </div>
        );
    }
}
