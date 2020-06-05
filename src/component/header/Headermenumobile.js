import React from 'react';
import { Button } from 'react-bootstrap';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Headermenumobile extends React.Component {


	render() {
		return (
			<div className="header-menu">
						<Button variant="outline-secondary" onClick={this.props.drawerClickHandler}><FontAwesomeIcon icon={faBars} /></Button>{' '}
			</div>

		);
	}
}

export default Headermenumobile;
