import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBoot from './components/NavbarBoot';
import HeaderImage from './components/HeaderImage';
import RequesterList from './components/RequesterList'
import FootbarBoot from './components/FootbarBoot'


function App() {
    return (<div>
        <NavbarBoot />
        <HeaderImage />
        <RequesterList />
        <FootbarBoot />
    </div>)
}

export default App;