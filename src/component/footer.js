import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './icon/logontn.png';
class Footer extends React.Component {
	render() {
		return (
			<footer>
			 <Container>
				
					<Row>
                        <Col sm={9}>
                        <div className="footer-logo">
							<img src={logo} style={{width:"25%"}} alt="ini" />
							<p>Keberkahan di Setiap Transaksi</p>
						</div>
                        </Col>
						<Col sm={3}>
                        <ul className="footer-list">
							<li>Catalog</li>
							<li>About</li>
							<li>Contact</li>
						</ul>
                        </Col>
					</Row>
					
				 </Container> 
				</footer>			
		);
	}
}

export default Footer;
