import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to={{ pathname: '/about', state: {fromNavigation: true }}}>About</Link>
        </div>
    );
}
// state는 route props에 넘겨줄 데이터
export default Navigation