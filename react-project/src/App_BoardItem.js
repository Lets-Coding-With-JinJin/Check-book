import React from 'react';
import { connect } from 'react-redux';

import { board_read, firebase_board_remove } from './App_reducer'

import './App_BoardItem.css'

const BoardItem = ({row, inx, board_read, firebase_board_remove}) => (
    <tr>
        <td>{inx}</td>
        <td><a onClick={() => { board_read(row.brdno) } }>{row.brdtitle}</a></td>
        <td>{row.brdwriter}</td>
        <td>{row.brddate}</td>
        <td><a onClick={() => { firebase_board_remove(row.brdno) }}>X</a></td>
    </tr>
);

const mapDispatchToProps = dispatch => ({
  board_read: brdno => dispatch(board_read(brdno)),
  firebase_board_remove: brdno => dispatch(firebase_board_remove(brdno))
})

export default connect(null, mapDispatchToProps)(BoardItem)