import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import NoteList from '../NoteList/NoteList';
import SidePanelStyles from './SidePanel.module.scss';

export class SidePanel extends PureComponent {
    render() {
        const { currentNoteMode } = this.props;

        const { Just } = SidePanelStyles;

        return (
            <div className="col-md-3 d-md-block bg-light border-right">
                <div className={Just}>Current note mode - {currentNoteMode}</div>
                <h3 className="pr-4 pt-4 pb-4">Notes list</h3>
                <NoteList />
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        currentNoteMode: store.currentNoteMode,
    };
};

export default connect(mapStateToProps)(SidePanel);
