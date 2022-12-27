import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
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
                          <Link className='headeroptionone' to='/login'>로그인</Link>
                      </div>
                      <div className='header-option'>
                          <Link className='headeroptionone' to='/newaccount'>회원가입</Link>
                      </div>
                </div>
             </div>
          </div>    
    )
  }
  export default Navbar;