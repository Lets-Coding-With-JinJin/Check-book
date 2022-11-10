import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardItem from './App_BoardItem';

import {firebase_board_list} from './App_reducer';

class BoardList extends Component {
    componentDidMount() {
        this.props.dispatch(firebase_board_list());
    }
    render() {
        const { boards} = this.props;

        return (
                <table border="1">
                    <tbody>
                    <tr align="center">
                        <td width="50">No.</td>
                        <td width="300">Title</td>
                        <td width="100">Name</td>
                        <td width="100">Date </td>
                    </tr>
                    {
                        boards.map((row, inx) => 
                            (<BoardItem key={inx} inx={inx+1} row={row} />)
                        )
                    }
                    </tbody>
                </table>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        boards: state.boards,
        selectedBoard: state.selectedBoard
    };
}

export default connect(mapStateToProps)(BoardList);