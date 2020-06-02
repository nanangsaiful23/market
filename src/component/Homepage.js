import React from 'react';
import '../App.css';
import Header from './Header';
import Slider from './Slider';
import Main from './Main';
import Footer from './footer';


class Homepage extends React.Component {
  // Nyatakan constructor dibawah
  
  render() {
    return(
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
export default Homepage;
