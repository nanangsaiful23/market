import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

class Product extends React.Component {
	render() {
        const carouselList = [
			{ name: 'KurmaMesir', img: 'assets/KurmaMesir.png' },
			{ name: 'MixNuts', img: 'assets/MixNuts.png' },
			{ name: 'RoastedBatikCake', img: 'assets/RoastedBatikCake.png' },
			{ name: 'RoastedBatikCake', img: 'assets/RoastedBatikCake.png' }
		];
		return (
			<div className="latarbelakang">
				<Container className="productBox">
                
					<Row>
						<Col sm={3}>
                        <Carousel>
								{carouselList.map((carouselitem) => {
									return (
										<Carousel.Item key={carouselitem.img}>
											<img
												className="d-block w-100"
												src={carouselitem.img}
                                                alt={carouselitem.name}
                                
											/>
											{/* <Carousel.Caption>
												<p>{carouselitem.name}</p>
											</Carousel.Caption> */}
										</Carousel.Item>
									);
								})}
							</Carousel>
							<h3 style={{"text-align":"center"}}>
								{carouselList[0].name}
							</h3>
						</Col>
						<Col sm={9}>
							<p>
								lorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem
								ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsom<br />
								lorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem
								ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsom<br />
								lorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem
								ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsom<br />
								lorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem
								ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsom<br />
								lorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem
								ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsom<br />
								lorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem
								ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsom<br />
								lorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem
								ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsom<br />
								lorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem
								ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsom<br />
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Product;
