import React from 'react';
import './Home.css';
import { FiChevronRight } from "react-icons/fi";
import Product from './product';

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img className='home-event1' src="./mainevent1.png" alt="mainevent"/>
            </div>

        <div className='rec'>
            <div className='rec-rec'>박시연 님이 좋아하실만한 책을 소개해 드려요</div>
            <div className='rec-age'>최근에 고등학생 연령대에 가장 많이 조회된 책이에요.</div>
            <div className='rec-ctgy'>카테고리별 추천도서</div>
            <div className='rec-review'>실시간 서평</div>
            <button class="next">
                <FiChevronRight className='icon-next' />
            </button>
            </div>

        <div className='home_row'>
            <Product />
        </div>
        <div className='home_row'>
            <Product />
        </div>
        <div className='home_row'>
            <Product />
        </div>
        <div className='home_row'>
            <Product />
        </div>


        </div>
    )
}

export default Home;