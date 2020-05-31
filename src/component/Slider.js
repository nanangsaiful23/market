import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {  Row, Col } from 'react-bootstrap';


class Slider extends React.Component {
	render() {
		const carouselList = [
			{
				img: 'assets/Produk.png',
				caption1: 'ini Slide1',
				Caption2: 'ini caption slide 1'
			},
			{
				img: 'assets/Quotes.png',
				caption1: 'ini Slide2',
				Caption2: 'ini caption slide 2'
			}
		];

		return (
				<Row>
					<Col xs={12}>
						<Carousel>
							{carouselList.map((carouselitem) => {
								return (
									<Carousel.Item key={carouselitem.img}>
										<img className="d-block w-100"  src={carouselitem.img} alt={carouselitem.caption1}/>
										<Carousel.Caption>
											<h3>{carouselitem.caption1}</h3>
											<p>{carouselitem.caption2}</p>
										</Carousel.Caption>
									</Carousel.Item>
								);
							})}
						</Carousel>
					</Col>
				</Row>
		);
	}
}

export default Slider;
