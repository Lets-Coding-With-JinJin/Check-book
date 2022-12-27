import React, { Component } from 'react';
import axios from './axios';

import './BookDetail.css';

class BookDetail extends Component {
    render() {
        return (
            <div className='detailpage'>
                <div className='main'>
                    <img id='book-image' src='./book1.png' alt='책 표지' />
                    <div className='express'>
                        <div className='row'>
                            <p id='title'>브로콜리 평원의 혈투</p>
                            <div className="filter">
                                <p id='filter-tag'>시/에세이</p>
                                <p id='filter-tag'>인문</p>
                            </div>
                        </div>
                        <p id='writer-top'>임시저자</p>
                        <button>읽기 시작하기</button>
                    </div>
                </div>
                <div className='summary'>
                    <p className='contents'>줄거리</p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </div>
                <div className='writer'>
                    <p className='contents'>저자</p>
                    저자이름
                </div>
            </div>
        );
    }
}

export default BookDetail;