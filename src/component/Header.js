import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, InputGroup, FormControl, Button ,ButtonGroup, Navbar} from 'react-bootstrap';
import Logo from './icon/logontn.png';
class Header extends React.Component {
	render() {
        
		return (
			<Navbar sticky="top" className="navHeader">
			{/* <header> */}
				 <Container >
					<Row >
						<Col  xs={2} sm={2}>
							<div className="header-logo">
								<Link to="/"><img src={Logo} alt="logo" style={{ width: '100%' }}/></Link>
								
								
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
										<Link to="/Catalog">
										<Button variant="outline-secondary">Cari</Button>
										</Link>
									</InputGroup.Append>
								</InputGroup>
							</div>
						</Col>
						<Col sm={3}>
							<div className="header-menu">
								<ButtonGroup aria-label="Basic example">
									<Link to="/Catalog"><Button variant="outline-secondary" href="">Produk</Button></Link>
									<Link to="/About" ><Button variant="outline-secondary">Tentang</Button></Link>
									<Link to="/Contact"><Button variant="outline-secondary">Kontak</Button> </Link>									
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
