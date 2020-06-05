import React from 'react';
import { Link } from 'react-router-dom';
class SideNavPage extends React.Component {
	render() {
		let drawerClasses = 'side-drawer';
		if (this.props.show) {
			drawerClasses = 'side-drawer open';
		}
		return (
			<div className={drawerClasses}>
				<Link to="/Catalog" className="btnnav">
					Produk
				</Link>

				<Link to="/Contact" className="btnnav">
					Kontak
				</Link>
				<Link to="/About" className="btnnav">
					Tentang
				</Link>
			</div>
		);
	}
}

export default SideNavPage;
