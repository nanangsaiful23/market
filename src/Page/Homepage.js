import React from 'react';
import '../App.css';
import Header from '../component/Header';
import Slider from '../component/Slider';
import Main from '../component/Main';
import Footer from '../component/Footer';


class Homepage extends React.Component {
  // Nyatakan constructor dibawah
  
  render() {
    return(
      <div>
        <Header/>
         <Slider/>
       <Main 
        category="Kacang"/>
       <Main
       category="Beras"/>
       <Main
       category="Roti Kering"/>
       <Footer/>
      </div>
   );
  }
}
export default Homepage;
