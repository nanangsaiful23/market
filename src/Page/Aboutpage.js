import React from 'react';
import '../App.css';
import Header from '../component/Header';

import Footer from '../component/Footer';
import About from '../component/About';


class Aboutpage extends React.Component {
  // Nyatakan constructor dibawah
  
  render() {
    return(
      <div>
        <Header/>
         <About/>
       <Footer/>
      </div>
   );
  }
}
export default Aboutpage;
