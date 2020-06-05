import React from 'react';

class SideNavPage extends React.Component {
	render() {
		let drawerClasses = 'side-drawer';
		if (this.props.show) {
			drawerClasses = 'side-drawer open';
		}
		return (
			<div className={drawerClasses}>
				<a href="/Catalog" className="btnnav">
					Produk
				</a>

				<a href="/Contact" className="btnnav">
					Kontak
				</a>
				<a href="/About" className="btnnav">
					Tentang
				</a>
			</div>
		);
	}
}

export default SideNavPage;
