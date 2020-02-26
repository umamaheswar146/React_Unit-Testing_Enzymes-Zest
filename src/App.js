import React from 'react';
import './App.css';
import Ticket from './Components/Ticket'
import Footer from './Components/Footer'
function App() {
  return (
    <div className="App">
     <Ticket name='Unit-Testing-Using-Enzyme/Zest'/>
     <Footer></Footer>
    </div>
  );
}

export default App;
