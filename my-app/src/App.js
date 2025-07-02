import React from 'react';
//import logo from './logo.svg';
//import './App.css';
//import Name from './Name';
//import Nested from './Nested'
//import JSX from './Sample';
//import First from './First';
import Second from './Second';
//import Third from './Third';

const myBike={
  model:"Yamaha",
  year: "2022",
  dealer: "nixon",
  color:"white"
}




function App() {

  return (
    <div className="App">
    
  <Second myBike = {myBike}/>



    </div>
    
  );
}

export default App;
