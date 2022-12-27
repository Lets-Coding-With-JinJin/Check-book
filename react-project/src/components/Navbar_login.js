import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar_login() {
    return (
          <div className='sum'>
              <div className='nav'>
              <div className='logo'>
                <img class='img-logo' alt='로고'></img>
              </div>
                <div className="header-search">
                  <img class='img-search' alt='검색'></img>
                  <input className="header-search-input" type="text" placeholder="도서명, ISBN, 카테고리" />
                </div>
                <div class='ul'>
                      <div className='header-option'>
                        <img class='curation-img' alt='큐레이션이미지'></img>
                        <Link className='headeroptionone' to='/home_login' id='curation'>큐레이션</Link>
                      </div>
                      <div className='header-option'>
                        <img class='boardform-img' alt='독서기록이미지'></img>
                        <Link className='headeroptionone' to='/boardform' id='boardform'>독서기록</Link>
                      </div>
                      <div className='header-option'>
                        <img class='mypage-img' alt='마이페이지이미지'></img>
                        <Link className='headeroptionone' to='/mypage' id='mypage'>마이페이지</Link>
                      </div>
                </div>
             </div>
          </div>    
    )
  }
  export default Navbar_login;