import React from 'react';


class Backdrop extends React.Component {
  
	render() {
		return (
			<div className="backdrop" onClick={this.props.click}>

            </div>
			
		);
	}
}

export default Backdrop;
