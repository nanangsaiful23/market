import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../icon/logontn.png';
class Headerlogo extends React.Component {
	render() {
		return (
			
								<div className="header-logo">
									<Link to="/">
										<img src={Logo} alt="logo" style={{ width: '100%' }} />
									</Link>
								</div>
					
		);
	}
}

export default Headerlogo;
