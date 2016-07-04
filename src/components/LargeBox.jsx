var React = require('react');

var LargeBox = React.createClass({
	render: function() {

		var divStyle = {
      color: '#1a1a00'

    }

    var panelStyle = {
      color: '#1a1a00'
    }

    var headingStyle = {
    	color: '#1a1a00'
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
        		<h3>{this.props.blockTitle}</h3>
        		<h5> <i> <strong> {this.props.title} </strong> </i> </h5>
        	</center>	
        </div>
        <div style={panelStyle} className='panel-body'>
        	<div className='row'>
        		<div className='col-sm-12 col-md-3'>
        			<center>

        			<img src={this.props.img} width={this.props.width} height={this.props.height} mode='fit'/> 	
        			</center>
        		</div>
        		<div className='col-sm-12 col-md-9'>
        			
        			<h5><strong>{this.props.title1}</strong></h5>
        			<h5>{this.props.text1}</h5>
        			
        			<h5><strong>{this.props.title2}</strong></h5>
        			<h5>{this.props.text2}</h5>
        			
        		</div>
        	</div>
      	</div>
     </div>
     
    );
  }
});


module.exports = LargeBox;