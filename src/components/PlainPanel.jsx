var React = require('react');

var PlainPanel = React.createClass({
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

    if (this.props.headingColor) {
      headingStyle.background = this.props.headingColor;
      panelStyle.background = this.props.panelColor
    }
    return (
      <div style={divStyle} className='panel'>
        <div style={headingStyle} className='panel-heading'>
        	{this.props.title}
        </div>
        <div style={panelStyle} className='panel-body'>
        	<div className='col-sm-4'> 
        		<center>
        			<h3>49</h3>
        			Deaths
        		</center>
        	</div>
        	<div className='col-sm-4'> 
        		<center>
        			<h3>53</h3>
        			Injured
        		</center>
        	</div>
        	<div className='col-sm-4'> 
        		<center>
        			<h3>Millions</h3>
        			Shocked
        		</center>
        	</div>	
        </div>	
      </div>
     
    );
  }
});

module.exports = PlainPanel;