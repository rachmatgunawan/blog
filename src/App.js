import React, {Component} from 'react';
import './css/App.css';
import Utama from './components/Utama';
import Game from './components/foto/game.png';
import Android from './components/foto/android.png';
import Web from './components/foto/web.png';
import Footer from './components/Footer';
import {Link} from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title="Portofolio" style={{color:"#00ff00"}} scroll> 
                        <Navigation >
                            <Link style={{color:"green", fontStyle:"Bold", fontSize:"15px"}} to="/Home" >Home</Link>
                            <Link style={{color:"green", fontStyle:"Bold", fontSize:"15px"}} to="/AboutMe">About Me</Link>
                            <Link style={{color:"green", fontStyle:"Bold", fontSize:"15px"}} to="/Game">Game</Link>
                            <Link style={{color:"green", fontStyle:"Bold", fontSize:"15px"}} to="/Web">Website</Link>
                            <Link style={{color:"green", fontStyle:"Bold", fontSize:"15px"}} to="/Apps">Android</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Portofolio" style={{background: "linear-gradient(to right, #2980B9, #6DD5FA)", color:"#00ff00" , fontSize:"25px" }}>
                    
                        <Navigation >
                            <Link className="linknav" to="/Home"><h5>Home</h5>  </Link>
                            <Link className="linknav" to="/AboutMe"><h5>About Me </h5></Link>
                            <hr style={{ borderTop: '3px solid #833fb2' }}/>
                            <Link className="linknav" to="/Game"><h5>Game</h5>
                            <img src={Game} className="logonav"/>
                            </Link>
                            <Link className="linknav" to="/Apps"><h5>Android</h5>
                            <img src={Android} className="logonav"/>
                            </Link>
                            <Link className="linknav" to="/Web"><h5>Website</h5>
                            <img src={Web} className="logonav"/>
                            </Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content"/>
                        <Utama/>
                    </Content>
                    <Footer/>
                </Layout>
            </div>
        );
    }
}

export default App;