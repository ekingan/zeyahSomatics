var React = require('react');

var SolidBox = React.createClass({
  render: function() {

  	var divStyle = {
      color: 'white'

    }

    var panelStyle = {
      height: 180
    }

    
    if (this.props.panelColor) {
      panelStyle.background = this.props.panelColor;
    }

 return (
      <div style={divStyle} className='panel'>
        <div style={panelStyle} className='panel-body'>	
        	<center>
        		<h2>{this.props.temp}</h2>
        		{this.props.city}
        	</center>
        </div>	
      </div>
     
    );
  }
});


module.exports = SolidBox;

