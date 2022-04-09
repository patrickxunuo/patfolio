import './App.css';
import React, {useEffect, useState} from 'react'
import {AnimatePresence} from 'framer-motion'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import ProjectPage from './pages/ProjectPage'
import LifePage from './pages/LifePage'
import SocialPage from "./pages/SocialPage";
import {Route, Switch, useLocation} from 'react-router-dom'

function App() {
    const [isSmall, setIsSmall] = useState(true)
    const location = useLocation()

    useEffect(()=>{
        if (window.outerWidth > 900) {
            setIsSmall(false)
        }
    },[])

    return (
        <div className="App">
            <Header isSmall={isSmall}/>
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.key}>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/project">
                        <ProjectPage/>
                    </Route>
                    <Route path="/life">
                        <LifePage/>
                    </Route>
                    <Route path="/social">
                        <SocialPage/>
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;
