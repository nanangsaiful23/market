import React from 'react';
import '../App.css';
import Header from '../component/Header';

import Footer from '../component/Footer';
import Product from '../component/Product';


class Productpage extends React.Component {
  // Nyatakan constructor dibawah
  
  render() {
    return(
      <div>
        <Header/>
         <Product/>
       <Footer/>
      </div>
   );
  }
}
export default Productpage;
