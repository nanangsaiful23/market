import React from 'react';
import '../App.css';
import Header from '../component/Header';

import Footer from '../component/Footer';
import ViewProducts from '../component/ViewProducts';



class Catalogpage extends React.Component {
  // Nyatakan constructor dibawah
  
  render() {
    return(
      <div>
        <Header/>
        <ViewProducts/>
       <Footer/>
      </div>
   );
  }
}
export default Catalogpage;
