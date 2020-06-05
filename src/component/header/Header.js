import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, ButtonGroup, Navbar } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import Headerlogo from './Headerlogo';
import './Header.css';
import Headersearch from './Headersearch';
import Headermenumobile from './Headermenumobile';
import SideNavPage from './SideNavPage';
import Backdrop from './Backdrop';

const Desktop = ({ children }) => {
	const isDesktop = useMediaQuery({ minWidth: 992 });
	return isDesktop ? children : null;
};
// const Tablet = ({ children }) => {
// 	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
// 	return isTablet ? children : null;
// };
const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return isMobile ? children : null;
};
// const Default = ({ children }) => {
// 	const isNotMobile = useMediaQuery({ minWidth: 768 });
// 	return isNotMobile ? children : null;
// };

class Header extends React.Component {
	state = {
		sideDrawerOpen: false
	};

	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return { sideDrawerOpen: !prevState.sideDrawerOpen };
		});
	};

	backdropClickHandler = () => {
		this.setState({ sideDrawerOpen: false });
	};

	render() {
		let backdrop;
		let sideNavPage;

		if (this.state.sideDrawerOpen) {
			backdrop = <Backdrop click={this.backdropClickHandler} />;
			sideNavPage = <SideNavPage  show={this.state.sideDrawerOpen}/>;
		}

		return (
			<Navbar sticky="top" className="navHeader">
				{/* <header> */}
				<Mobile>
					<Container>
						<Row>
							<Col xs={3}>
								<Headerlogo />
							</Col>
							<Col xs={7}>
								<Headersearch />
							</Col>
							<Col xs={1}>
								<Headermenumobile drawerClickHandler={this.drawerToggleClickHandler}/>
							</Col>
							
						</Row>
					</Container>
					{sideNavPage }
					{backdrop}
				</Mobile>
				<Desktop>
					<Container>
						<Row>
							<Col sm={2}>
								<Headerlogo />
							</Col>
							<Col sm={7}>
								<Headersearch />
							</Col>
							<Col xs={12} sm={3}>
								<div className="header-menu">
									<ButtonGroup aria-label="Basic example">
										<Link to="/Catalog">
											<Button variant="outline-secondary" href="">
												Produk
											</Button>
										</Link>
										<Link to="/About">
											<Button variant="outline-secondary">Tentang</Button>
										</Link>
										<Link to="/Contact">
											<Button variant="outline-secondary">Kontak</Button>
										</Link>
									</ButtonGroup>
								</div>
							</Col>
						</Row>
					</Container>
				</Desktop>
				{/* </header> */}
			</Navbar>
		);
	}
}

export default Header;
