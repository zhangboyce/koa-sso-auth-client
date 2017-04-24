'use strict';

import React from 'react';
import $ from 'jquery';
export default class App extends React.Component {

    logout() {
        let auth_callback = encodeURIComponent('http://localhost:18888/api/getToken');
        window.location.href = 'http://localhost:8888/api/user/logout?auth_callback=' + auth_callback;
    }

    render () {
        console.log('render c1');
        return (
            <div className="main">
               <a href="#" onClick={ this.logout.bind(this) }>退出C1</a>
                <br />
               <a href="/main" >to main</a>
            </div>
        );
    }
}