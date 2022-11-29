import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
          <div className='sum'>
              <div className='logo'>
                <h1>CheckChack</h1>
              </div>

              <div className='nav'>
                <div className="header-search">
                    <input className="header-search-input" type="text" placeholder="도서명, ISBN, 카테고리" />
                </div>
                <div class='ul'>
                      <div className='header-option'>
                          <Link className='headeroptionone' to='/'>로그인</Link>
                      </div>
                      <div className='header-option'>
                          <Link className='headeroptionone' to='/'>회원가입</Link>
                      </div>
                </div>
             </div>
          </div>    
    )
  }
  export default Navbar;


