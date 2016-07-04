var React = require('react');

var Smallbox = React.createClass({
	render: function() {

		var divStyle = {
      color: 'white'

    }

    var panelStyle = {
      color: 'grey'
    }

    var headingStyle = {
    	color: 'grey'
    }

    var imageStyle = {
    	
    }

    if (this.props.headingColor) {
      headingStyle.background = this.props.headingColor;
      panelStyle.background = this.props.panelColor
    }

 return (
      <div style={divStyle} className='panel'>
        <div style={headingStyle} className='panel-heading'>
        	<center>
        		<h2> {this.props.title} </h2>
        		<img src={this.props.img} width={330} height={240} mode='fit'/> 
        	</center>
        </div>
        <div style={panelStyle} className='panel-body'>
        	{this.props.text}	
        </div>	
      </div>
     
    );
  }
});


module.exports = Smallbox;