import React from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button ,ButtonGroup, Navbar} from 'react-bootstrap';
import Logo from './icon/logontn.png';
import { useMediaQuery } from 'react-responsive';
class Header extends React.Component {
	render() {
        
		return (
			<Navbar sticky="top" className="navHeader">
			{/* <header> */}
				 <Container >
					<Row >
						<Col  xs={2} sm={2}>
							<div className="header-logo">
								<img src={Logo} alt="logo" style={{ width: '100%' }} />
							</div>
						</Col>
						<Col xs={9} sm={7} >
							<div className="header-search">
								<InputGroup className="mb-3">
									<FormControl 
										placeholder="Cari Produk"
										aria-label="Recipient's username"
										// aria-describedby="basic-addon2"
									/>
									<InputGroup.Append>
										<Button variant="outline-secondary">Button</Button>
									</InputGroup.Append>
								</InputGroup>
							</div>
						</Col>
						<Col sm={3}>
							<div className="header-menu">
								<ButtonGroup aria-label="Basic example">
									<Button variant="outline-secondary">Catalog</Button>
									<Button variant="outline-secondary">About</Button>
									<Button variant="outline-secondary">Contact</Button>
								</ButtonGroup>
							</div>
						</Col>
					</Row>
				 </Container>
				{/* </header> */}
				</Navbar>
		);
	}
}

export default Header;
