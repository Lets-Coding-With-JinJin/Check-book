import React, { Component } from 'react';

import './App_BookDetail.css';

class BookDetail extends Component {
    render() {
        return (
            <div className='detailpage'>
                <div className='main'>
                    <img id='book-image' src='./book1.png'></img>
                    <div className='express'>
                        <div className='row'>
                            <p id='title'>브로콜리 평원의 혈투</p>
                            <p id='filter1'>시/에세이</p>
                            <p id='filter2'>인문</p>
                        </div>
                        <p id='writer-top'>임시저자</p>
                        <button>읽기 시작하기</button>
                    </div>
                </div>
                <div className='summary'>
                    <p id='summary'>줄거리</p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>
                    sed do eiusmod tempor incididunt ut labore et dolore magna <br></br>
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br></br>
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse <br></br>
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat<br></br>
                     cupidatat non proident, sunt in culpa qui officia deserunt <br></br>
                     mollit anim id est laborum. Sed ut perspiciatis unde omnis iste<br></br>
                    natus error sit voluptatem accusantium doloremque laudantium, <br></br>
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis<br></br>
                     et quasi architecto beatae vitae dicta sunt explicabo.<br></br>
                </div>
                <div className='writer'>
                    <p id='writer'>저자</p>
                    저자이름
                </div>
            </div>
        );
    }
}

export default BookDetail;