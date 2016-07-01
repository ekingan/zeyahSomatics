var React = require('react');

var Smallbox = React.createClass({
	render: function() {

		var divStyle = {
      color: 'white'

    }

    var panelStyle = {
      
    }

    var headingStyle = {
    	
    }

    var imageStyle = {
    	imageSize: 50
    }

    if (this.props.headingColor) {
      headingStyle.background = this.props.headingColor;
      panelStyle.background = this.props.panelColor
    }

 return (
      <div style={divStyle} className='panel'>
        <div style={headingStyle} className='panel-heading'>
        	<img src={this.props.img} width={330} height={240} mode='fit'/> 
        </div>
        <div style={panelStyle} className='panel-body'>
        	{this.props.text}	
        </div>	
      </div>
     
    );
  }
});


module.exports = Smallbox;