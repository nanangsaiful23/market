import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './icon/logontn.png';
class Main extends React.Component {
	render() {
		const catalogList = [
			{ name: 'KurmaMesir', image: 'assets/KurmaMesir.png' },
			{ name: 'MixNuts', image: 'assets/MixNuts.png' },
			{ name: 'RoastedBatikCake', image: 'assets/RoastedBatikCake.png' }
		];
		return (
			<div className="catalog">
				{/* <Container> */}
					<Row>
						<div className="nama-catalog">
							<Col sm={3}>
								<h1>
									Our <br /> Catalog
								</h1>
							</Col>
						</div>

						{catalogList.map((catalogItem) => {
							return (
								// Panggil component Language dan teruskan props ke component tersebut
								// <div className="img-catalog">
									<Col sm={3} className="img-catalog">
										<img src={catalogItem.image} alt={catalogItem.name} width="80%" />
									</Col>
								// </div>
							);
						})}
					</Row>
				{/* </Container> */}
			</div>
		);
	}
}

export default Main;
