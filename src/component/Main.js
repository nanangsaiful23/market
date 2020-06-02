import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Main extends React.Component {
	render() {
		const catalogList = [
			{ name: 'KurmaMesir', image: 'assets/KurmaMesir.png' },
			{ name: 'MixNuts', image: 'assets/MixNuts.png' },
			{ name: 'RoastedBatikCake', image: 'assets/RoastedBatikCake.png' },
			{ name: 'RoastedBatikCake', image: 'assets/RoastedBatikCake.png' }
		];
		return (
			<div className="catalog">
				 <Container >
					
					<Row>
							<Col sm={2} className="nama-catalog">
								{/* <div className="nama-catalog"> */}
								<h1>
									{this.props.category}
								</h1>
								{/* </div> */}
							</Col>
							<Col sm={9} className="img-catalog">
						{catalogList.map((catalogItem) => {
							return (
								// Panggil component Language dan teruskan props ke component tersebut
								// <div className="img-catalog">
									
										<img src={catalogItem.image} alt={catalogItem.name} width="25%" className="catalog_image" />
									
								// </div>
							);
						})}
						</Col>
						
						<Col sm={1} className="next-catalog">
						<Link to="/catalog" >	
								<p>Lihat <br/> lebih <br/> banyak</p>
								</Link>	
						</Col>
						
					</Row>
					
				 </Container>
				</div>
		);
	}
}

export default Main;
