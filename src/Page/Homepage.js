import React from 'react';
import '../App.css';
import Header from '../component/header/Header';
import Slider from '../component/Slider';
import Categoridisp from '../component/categoriDisp/Categoridisp';
import Footer from '../component/Footer';


class Homepage extends React.Component {
  // Nyatakan constructor dibawah
  
  render() {
    return(
      <div>
        <Header/>
         <Slider/>
       <Categoridisp 
        category="Kacang"/>
       <Categoridisp
       category="Beras"/>
       <Categoridisp
       category="Roti Kering"/>
       <Footer/>
      </div>
   );
  }
}
export default Homepage;
