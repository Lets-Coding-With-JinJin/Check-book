import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from '../components/Navbar_login';
import Slider from '../components/Slider/Slider';
import BoardForm from './BoardForm';
import BookDetail from './BookDetail';
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <Navbar />
            <Slider />

        <div className='rec'>
            <div className='rec-rec'>박시연 님이 좋아하실만한 책을 소개해 드려요</div>
            <div className='rec-age'>최근에 고등학생 연령대에 가장 많이 조회된 책이에요.</div>
            <div className='rec-ctgy'>카테고리별 추천도서</div>
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