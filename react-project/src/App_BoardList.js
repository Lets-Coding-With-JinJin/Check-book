import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardItem from './App_BoardItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import {firebase_board_list} from './App_reducer';

import './App_BoardList.css'

class BoardList extends Component {
    componentDidMount() {
        this.props.dispatch(firebase_board_list());
    }
    render() {
        const { boards} = this.props;

        return (
            <>
                <table border="1">
                    <tbody>
                        {/* <tr align="center">
                            <td width="50">No.</td>
                            <td width="300">Title</td>
                            <td width="100">Name</td>
                            <td width="100">Date </td>
                        </tr> */}
                        {
                            boards.map((row, inx) => 
                                (<BoardItem key={inx} inx={inx+1} row={row} />)
                            )
                        }
                    </tbody>
                </table>
                {/* <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '836px', top: '64px' },
                }}
                noValidate
                autoComplete="off"
            >
                <div className="write column">
                    <div className="booktitle"><TextField label="도서 제목을 입력하세요" placeholder="Placeholder"
                        multiline variant="standard" rows={1} name="booktitle" value={this.state.booktitle} onChange={this.handleChange} />
                    </div>
                    <div className="booksummary"><TextField label="책에서 영감을 받은 부분 혹은 독서 기록을 한 문장으로 요약해주세요." placeholder="Placeholder"
                        multiline variant="standard" rows={1} name="booksummary" value={this.state.booksummary} onChange={this.handleChange} />
                    </div>
                    <div className="booknote"><TextField label="독서 기록 내용을 작성해주세요" placeholder="Placeholder"
                        multiline variant="standard" rows={20} name="booknote" value={this.state.booknote} onChange={this.handleChange} />
                    </div>
                    <div className="savebutton"><Button onClick={this.handleSave} variant="contained">독서기록 작성 완료</Button></div>
                    {
                        boards.map((row, inx) => 
                            (<BoardItem key={inx} inx={inx+1} row={row} />)
                        )
                    }
                </div>
            </Box> */}
            </>
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