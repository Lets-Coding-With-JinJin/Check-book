import React, { Component } from 'react';
import { connect } from 'react-redux';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import { firebase_board_save } from './App_reducer'

import './App_BoardForm.css'


class BoardForm extends Component {
    state = {};
    initialSelectedBoard = {
        booktitle: "",
        booksummary: "",
        booknote: "",
        brddate: ""
    };

    handleChange = (e) => {
        this.setState ({[e.target.name]: e.target.value});
    }
    
    handleSave = () => {
        this.props.dispatch(firebase_board_save(this.state));
        this.setState (this.initialSelectedBoard);
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState (nextProps.selectedBoard);
    }
    
    render() {
        return (
            <>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '1312px', top: '64px' },
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
                    </div>
                
                    <div className="booklist column">
                        <div className="title"><h1 id='header'>독서 기록 작성</h1></div>
                        <div className='subtitle'><p id='subtitle'>읽고있는 책 중에서 기록하고자 하는 책을 선택하세요.</p></div>
                        <div className="list">
                            <p id='book'><img src='./public/book1.png'></img></p>
                        </div>
                    </div>
                </Box>
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        selectedBoard: state.selectedBoard
    };
}
export default connect(mapStateToProps)(BoardForm);