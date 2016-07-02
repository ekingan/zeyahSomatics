var React = require('react');

var SimpleTextBox = React.createClass({
	render: function() {

		var divStyle = {
			marginTop: 10,
			color: 'grey'
		}


		return (
			<div style={divStyle}>
				{this.props.text}
			</div>


			);
	}
});

module.exports = SimpleTextBox;
