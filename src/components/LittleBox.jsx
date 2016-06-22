var React = require('react');

var LittleBox = React.createClass({
  render: function() {

  	var divStyle = {
      color: 'white'

    }

    var panelStyle = {
      height: 90,
      border: 5
    }

    var headingStyle = {
    	height: 90
    }

    if (this.props.headingColor) {
      headingStyle.background = this.props.headingColor;
      panelStyle.background = this.props.panelColor
    }

 return (
      <div style={divStyle} className='panel'>
        <div style={headingStyle} className='panel-heading'>
        	{this.props.title}
        	<h2> {this.props.subtitle}</h2>
        </div>
        <div style={panelStyle} className='panel-body'>	
        </div>	
      </div>
     
    );
  }
});


module.exports = LittleBox;
