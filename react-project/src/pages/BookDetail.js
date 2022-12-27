import React, { Component } from 'react';
import axios from './axios';

import './BookDetail.css';
import Navbar from '../components/Navbar_login';

class BookDetail extends Component {
    render() {
        return (
            <>
                <div className="Navbar">
                    <Navbar />
                </div>
                <div className='detailpage'>
                    <div className='main'>
                        <img id='book-image' alt='책 표지' />
                        <div className='express'>
                            <div className='row'>
                                <p id='title'>브로콜리 평원의 혈투</p>
                                <div className="filter">
                                    <p id='filter-tag'>시/에세이</p>
                                    <p id='filter-tag'>인문</p>
                                </div>
                            </div>
                            <p id='writer-top'>듀나</p>
                            <button>읽기 시작하기</button>
                        </div>
                    </div>
                    <div className='summary'>
                        <p className='contents'>줄거리</p>
                        한국 장르소설의 자존심, 독보적인 스토리텔러 듀나의 소설집 『브로콜리 평원의 혈투』가 10주년을 맞아 새롭게 출간되었다. 
                        <br></br>
                        듀나의 초기 단편부터 중편까지, 다양한 스타일의 작품 열세 편이 실려 있다. 
                        <br></br>
                        표제작 「브로콜리 평원의 혈투」와 수록작 「안개 바다」는 개정판이 동시 출간되는 『제저벨』과 세계관을 공유하는 작품으로, 
                        <br></br>
                        ‘링커 우주’의 시발점이 되는 에피소드를 다루고 있다. 
                        <br></br>
                        그 외 미스터리, 호러, 판타지 등 ‘장르소설’의 스펙트럼에 속하는 다채로운 이야기가 작가 특유의 유머러스한 입담을 통해 펼쳐진다. 
                        <br></br>
                        장르의 경계를 넘나드는 유연한 상상력의 소유자 듀나. 그의 작품 세계가 어떤 과정과 방식을 통해 형성되었는지 『브로콜리 평원의 혈투』를 통해 한눈에 확인할 수 있을 것이다.                    </div>
                    <div className='writer'>
                        <p className='contents'>저자</p>
                        듀나
                    </div>
                </div>
            </>
        );
    }
}

export default BookDetail;