var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
  //Called once in the component lift cycle - an initializer
  getInitialState: function() {
    return {items: [], newItemText: ''};
  },
  onChange: function(e) {
    //Update the state property every time a keystroke happens
    this.setState({newItemText: e.target.value});
  },
  handleSubmit: function(e) {
    //stop the button from getting clicks (We are using onSubmit)
    e.preventDefault();
    //Grab the current list of items
    var currentItems = this.state.items;

    //Add the new item to the list
    currentItems.push(this.state.newItemText);

    //Update the main item list with the new list and clear the newItemText
    this.setState({items: currentItems, newItemText:''});
  },
  render: function() {
    //syle
    var divStyle = {
      marginTop: 10
    }

    var headingStyle = {

    }

    if (this.props.headingColor) {
      headingStyle.background = this.props.headingColor;
    }

    //onChange is called woith every keystroke so we can store the most recent data endered
    //value is what the user sees int he input box, we point this to newItemText so it updates on every change
    return (
      <div style={divStyle} className='col-sm-4'>
        <div className='panel panel-primary'>
          <div style={headingStyle} className='panel-heading'>
          <h3>{this.props.title}</h3>
        </div>
        <div className='row panel-body'>
          <form onSubmit={this.handleSubmit}>
            <div className='col-sm-9'>
              <input className='form-control' onChange={this.onChange} value={this.state.newItemText} />
            </div>
            <div className='col-sm-2'>
              <button className='btn btn-primary'> Add </button>
            </div>
          </form>
      </div>
      <List items={this.state.items} />
    </div>
  </div>
    );
  }
});

module.exports = ListManager;
