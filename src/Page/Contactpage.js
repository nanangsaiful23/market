import React from 'react';
import '../App.css';
import Header from '../component/header/Header';

import Footer from '../component/Footer';

import Contact from '../component/Contact';


class Contactpage extends React.Component {
  // Nyatakan constructor dibawah
  
  render() {
    return(
      <div>
        <Header/>
         <Contact/>
       <Footer/>
      </div>
   );
  }
}
export default Contactpage;
