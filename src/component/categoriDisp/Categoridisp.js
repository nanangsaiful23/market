import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Desktop, Mobile } from '../Ukurandevice';
import './Categoridisp.css'
class Categoridisp extends React.Component {
	render() {
		const catalogList = [
			{ name: 'KurmaMesir', image: 'assets/KurmaMesir.png' },
			{ name: 'MixNuts', image: 'assets/MixNuts.png' },
			{ name: 'RoastedBatikCake', image: 'assets/RoastedBatikCake.png' },
			{ name: 'RoastedBatikCake', image: 'assets/RoastedBatikCake.png' }
		];
		return (
			<div className="catalog">
				<Mobile>
					<Container>
							<Col xs={12} className="nama-catalog">
								<h2>{this.props.category}</h2>
							</Col>
							<Col xs={12} className="img-catalog">
								{catalogList.map((catalogItem) => {
									return (
										<img
											src={catalogItem.image}
											alt={catalogItem.name}
											width="25%"
											className="catalog_image"
										/>
									);
								})}
							</Col>
							<Col xs={12} className="next-catalog">
								<Link to="/catalog">
									<p>
										Lihat  lebih  banyak
									</p>
								</Link>
							</Col>
						
					</Container>
				</Mobile>
				<Desktop>
					<Container>
						<Row>
							<Col sm={2} className="nama-catalog">
								<h1>{this.props.category}</h1>
							</Col>
							<Col sm={9} className="img-catalog">
								{catalogList.map((catalogItem) => {
									return (
										<img
											src={catalogItem.image}
											alt={catalogItem.name}
											width="25%"
											className="catalog_image"
										/>
									);
								})}
							</Col>

							<Col sm={1} className="next-catalog" style={{"textAlign":"center"}}>
								<Link to="/catalog">
									<p>
										Lihat <br /> lebih <br /> banyak
									</p>
								</Link>
							</Col>
						</Row>
					</Container>
				</Desktop>
			</div>
		);
	}
}

export default Categoridisp;
