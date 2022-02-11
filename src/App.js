import React from 'react';
import Sidebar from './Components/Sidebar'
import Detail1 from './Pages/Detail1';
import Main from './Components/Main'
import {  BrowserRouter as Router,  Switch, Route,Link, Routes} from 'react-router-dom'


function App() {

  return (
    <div className="App">
      {/* <Detail1/> */}
      {/* <Navbar/> */}
         {/* <Sidebar/> */}
{/* <Router>
  <Navbar/>
  <Routes>
    <Route exact path='/' element={<Home/>}>
      
      < Route path='home' component={Home}/>
      <Route path='about' component={About}/>
      <Home/>
    </Route>
  </Routes>
</Router> */}
    
      
     
     <Main/> 

      {/* <Router>
        
        <Route path="/call">
          <Call />
        </Route>

    
    </Router> */}
      
    </div>
  );
}

export default App;
