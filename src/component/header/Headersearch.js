import React from 'react';
import {  FormControl, InputGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Headersearch extends React.Component {
	render() {
		return (
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
		);
	}
}

export default Headersearch;
