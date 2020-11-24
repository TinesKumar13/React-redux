import React from 'react'
import { Route } from 'react-router-dom'


import "./App.css"
import GlobalStyles from './components/GlobalStyles'
import Nav from './components/Nav'
import Home from './pages/Home'



const App = () => {


    return (
        <div className="App">

            <GlobalStyles/>
            <Nav/>
            <Route path={["/game/:id", "/"]}>
               
            <Home/>
            </Route>
        
          
         

        </div>
    )
}

export default App
