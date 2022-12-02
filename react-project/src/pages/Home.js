import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider/Slider';

function Home() {
    return (
        <div className="home">
            <Navbar />
            <Slider />

        <div className='rec'>
            <div className='rec-rec'>박시연 님이 좋아하실만한 책을 소개해 드려요</div>
            <div className='rec-age'>최근에 고등학생 연령대에 가장 많이 조회된 책이에요.</div>
            <div className='rec-ctgy'>카테고리별 추천도서</div>
            <div className='rec-review'>실시간 서평</div>
            <button class="next">
                <div className='icon-next' />
            </button>
            </div>

        <div className='home_row'>
            
        </div>
        <div className='home_row'>
            
        </div>
        <div className='home_row'>
            
        </div>
        <div className='home_row'>
            
        </div>


        </div>
    )
}

export default Home;