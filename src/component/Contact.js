import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class Contact extends React.Component {
	render() {
		return (
			<div className="latarbelakang">
				<Container className="aboutBox">
					<Row>
						<Col sm={2}>
							<h1>
								Kontak <br />Kami
							</h1>
                            <p>
                                telp:082214119227
                            </p>
						</Col>
						<Col sm={10}>
							<Form>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Alamat Email </Form.Label>
									<Form.Control type="email" placeholder="Masukkan email" />
									<Form.Text className="text-muted">
										Kita tidak akan menyebarkan email anda
									</Form.Text>
								</Form.Group>
								<Form.Group controlId="exampleForm.ControlTextareaPesan">
									<Form.Label>Pesan</Form.Label>
									<Form.Control as="textarea" rows="3" />
								</Form.Group>
								<Button variant="outline-secondary" type="submit">
									Kirim
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Contact;
