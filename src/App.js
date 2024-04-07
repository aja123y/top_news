
import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import New from './Components/New';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const pageSize=9;
  const apiKey=process.env.REACT_APP_NEWS_API;
  const [progress, setProgress ] = useState(0)
  
    return (
      <div> 
          {/* <Navbar/>
          <New setProgress={setProgress} apiKey={apiKey}pageSize={6} country="in" category='general'/> */}
          <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
        <Routes>
          <Route exact path='/' element={<New setProgress={setProgress} apiKey={apiKey} key="general"  pageSize={pageSize} country='in' category='general'/>}/>
          <Route exact path='/business'  element={<New setProgress={setProgress} apiKey={apiKey} key="business"  pageSize={pageSize} country='in' category='business'/>}/>
          <Route exact path='/entertainment'  element={<New setProgress={setProgress} apiKey={apiKey} key="entertainment"  pageSize={pageSize} country='in' category='entertainment'/>}/>
          {/* <Route exact path='/general'   element={<New setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='in' category='general'/>}/> */}
          <Route exact path='/health'  element={<New setProgress={setProgress} apiKey={apiKey} key="health"  pageSize={pageSize} country='in' category='health'/>}/>
          <Route exact path='/science'  element={<New setProgress={setProgress} apiKey={apiKey} key="science"  pageSize={pageSize} country='in' category='science'/>}/>
          <Route exact path='/sports'  element={<New setProgress={setProgress} apiKey={apiKey} key="sports"  pageSize={pageSize} country='in' category='sports'/>}/>
          <Route exact path='/technology'  element={<New setProgress={setProgress} apiKey={apiKey} key="technology"  pageSize={pageSize} country='in' category='technology'/>}/>
        </Routes>
        </BrowserRouter>
           
           
      </div>
    )
  
}

export default App