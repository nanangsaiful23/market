import React from 'react';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/footer';
import Slider from './component/Slider';
import { Container } from 'react-bootstrap';

class App extends React.Component {
  // Nyatakan constructor dibawah
  
  
  render() {
    return (
      <div>
        <Header/>
         <Slider/>
       <Main/>
       <Main/>
       <Main/>
       <Footer/>
      </div>
   );
  }
}
export default App;
