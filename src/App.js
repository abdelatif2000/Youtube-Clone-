import React from 'react';
import Home from "./pages/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'react-loading-skeleton/dist/skeleton.css'
import {BrowserRouter as Router ,Route,Redirect,Switch } from  'react-router-dom'
import Login from "./pages/logo/login";
import Search from './pages/Search/Search';
import Watch from './pages/witchingVideo/watch'
import Subscriptions from "./pages/subscriptions/subscriptions";

function App() {
    return (
           <>
               <Router>
                   <Switch>
                       <Route exact path='/' ><Home/></Route>
                       <Route  path='/login' ><Login/> </Route>
                       <Route  path='/search/:keyword' ><Search/> </Route>
                       <Route  path='/watch/:id' ><Watch/> </Route>
                       <Route  path='/subscriptions' ><Subscriptions/> </Route>
                       <Redirect to='/'/>
                   </Switch>
               </Router>
           </>
    );
}
export default App;