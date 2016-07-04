var React = require('react');

var SimpleTextBox = React.createClass({
	render: function() {

		var divStyle = {
			marginTop: 10,
			color: '#1a1a00'
		}


		return (
			<div style={divStyle} className='panel'>
				<strong>{this.props.boldText}</strong>
				{this.props.text}
			</div>


			);
	}
});

module.exports = SimpleTextBox;
