var React = require('react');

var Fullpanel = React.createClass({
	render: function() {

		var divStyle = {
			marginTop: 10,
			color: 'white'
		}

		var imageStyle = {
    	width: 100, 
    	marginRight: 10
		}

		return (
			<div style={divStyle}>
				<div className="row">
					<div className="col-sm-3">
						<img src={this.props.img} width={160} height={140} mode='fit' />
					</div>
					<div className="col-sm-9">
						{this.props.text}
					</div>
				</div>
			</div>


			);
	}
});

module.exports = Fullpanel;