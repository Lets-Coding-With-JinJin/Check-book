import React, { Component }  from "react";
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img className="header-logo" src="./signature.png" alt="main-logo"/>
            
                <div className="header-search">
                    <input className="header-search-input" type="text" placeholder="도서명, ISBN, 카테고리" />
                </div>
    
                <div className="search">
                    <img className="search-icon" src="./search.png" alt="search-icon" />
                </div>
    
                <div className="header-Nav">
                    <div className="header-option">
                        <span className="header-optionLineOne"> 로그인 </span>
                        <span className="header-optionLineTwo">회원가입</span>
                    </div>
    
                <div className="header-optionBasket"></div> 
    
                </div>
            </div>
        );
    }
}

export default Header;