import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Link} from "react-router-dom";
import Navbar from '../components/Navbar';
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
            <div className='rec-rec'>박시연 님이 좋아하실만한 책을 소개해 드려요.
                <div className="container">
                    <Link className="row" to='/bookdetail'>
                        <div className="col-md-6 grid">
                            <img src="http://image.yes24.com/goods/111731427/XL" alt='책1'></img>
                            <h5>브로콜리 평원의 혈투</h5>
                            <p id='book1'>듀나</p>
                        </div>
                    </Link>
                </div>
            </div>
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