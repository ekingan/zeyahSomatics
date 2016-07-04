var React = require('react');

var ImageBox = React.createClass({
	render: function() {

		var divStyle = {
			padding: 20
		}

		var imageStyle = {
    	width: 100
		}

		return (
			<div style={divStyle}>
				<img src={this.props.img} width={this.props.width} height={this.props.height} mode='fit' />
			</div>


			);
	}
});

module.exports = ImageBox;