var React = require('react');

var FullPanel = React.createClass({
  render: function() {

  	var divStyle = {
      marginTop: 10,
      color: 'white'

    }

    var panelStyle = {
      
    }

    var headingStyle = {
    	height: 200
    }

    var imageStyle = {

    }

    if (this.props.headingColor) {
      headingStyle.background = this.props.headingColor;
      panelStyle.background = this.props.panelColor
    }

    if (this.props.imageSource) {
      imageStyle = this.props.imageSource
    }
    return (
      <div style={divStyle} className='panel'>
        <div style={headingStyle} className='panel-heading'>
        	{this.props.title}
        </div>
        <div style={panelStyle} className='panel-body'>
        	<div className='col-sm-12'> 
        		<left>
        		  // <img src={imageStyle}>	
        		</left>	
        </div>	
      </div>
     
    );
  }
});

module.exports = FullPanel;