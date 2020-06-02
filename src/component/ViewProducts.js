import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class ViewProducts extends React.Component {
	render() {
		const productList = [
			{ name: 'KurmaMesir', image: 'assets/KurmaMesir.png' },
			{ name: 'MixNuts', image: 'assets/MixNuts.png' },
			{ name: 'RoastedBatikCake', image: 'assets/RoastedBatikCake.png' },
			{ name: 'RoastedBatikCake', image: 'assets/RoastedBatikCake.png' },
			{ name: 'KurmaMesir', image: 'assets/KurmaMesir.png' },
			{ name: 'MixNuts', image: 'assets/MixNuts.png' },
			{ name: 'RoastedBatikCake', image: 'assets/RoastedBatikCake.png' },
			{ name: 'RoastedBatikCake', image: 'assets/RoastedBatikCake.png' },
			{ name: 'KurmaMesir', image: 'assets/KurmaMesir.png' },
			{ name: 'MixNuts', image: 'assets/MixNuts.png' },
			{ name: 'RoastedBatikCake', image: 'assets/RoastedBatikCake.png' },
			{ name: 'RoastedBatikCake', image: 'assets/RoastedBatikCake.png' },
			{ name: 'KurmaMesir', image: 'assets/KurmaMesir.png' },
			{ name: 'MixNuts', image: 'assets/MixNuts.png' },
			{ name: 'RoastedBatikCake', image: 'assets/RoastedBatikCake.png' },
			{ name: 'RoastedBatikCake', image: 'assets/RoastedBatikCake.png' }
		];
		return (
			<div className="products">
				<Container>
					<Row>
						<Col sm={2} className="filterProduks">
							<h2>Filter Products</h2>
							<Form>
								<Form.Group controlId="formGridNamaProduct">
									<Form.Label>Nama</Form.Label>
									<Form.Control placeholder="Kurma" />
								</Form.Group>

								<Form.Group controlId="formGridCategory">
									<Form.Label>Category</Form.Label>
									<Form.Control as="select" value="Choose...">
										<option>Choose...</option>
										<option>...</option>
									</Form.Control>
								</Form.Group>

								<Form.Label>Harga Barang</Form.Label>
								<Form.Row>
									<Form.Group as={Col} controlId="formGridminHarga">
										<Form.Label>Min</Form.Label>
										<Form.Control type="number" placeholder="0" />
									</Form.Group>

									<Form.Group as={Col} controlId="formGridmaxHarga">
										<Form.Label>Max</Form.Label>
										<Form.Control type="number" placeholder="100.000" />
									</Form.Group>
								</Form.Row>

								<Button variant="primary" type="submit">
									Submit
								</Button>
							</Form>
						</Col>
						<Col sm={10} className="ListProduks">
							{productList.map((productItem) => {
								return (
									// Panggil component Language dan teruskan props ke component tersebut
									// <div className="img-catalog">

									<img
										src={productItem.image}
										alt={productItem.name}
										width="25%"
										className="catalog_image"
									/>

									// </div>
								);
							})}
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default ViewProducts;
