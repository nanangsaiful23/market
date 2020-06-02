import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './icon/logontn.png';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
	render() {
		return (
			<footer>
			 <Container>
				
					<Row>
                        <Col sm={3}>
                        <div className="footer-logo">
							<img src={logo} style={{width:"75%"}} alt="ini" />
							<p>Keberkahan di Setiap Transaksi</p>
						</div>
                        </Col>
						<Col sm={3}>
							<p>Ntn Mart<br/>
								Jalan Magelang-Salatiga, Getasan,<br/>
								Kec. Getasan, Semarang, <br/>
								Jawa Tengah 50774<br/>
								No Telpon :082214119227</p>
						</Col>
						<Col sm={3}>
							{/* <SimpleMap/> */}
						</Col>
						<Col sm={3}>
                        <ul className="footer-list" >
							<Link to="/Product"><li>Produk</li></Link>
							<Link to="/About"><li>Tentang Kami</li>
							</Link>
							<Link><li>Kontak</li></Link>
							
						</ul>
                        </Col>
					</Row>
					
				 </Container> 
				</footer>			
		);
	}
}

export default Footer;
