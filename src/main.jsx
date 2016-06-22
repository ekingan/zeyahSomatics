var React = require('react');
var ReactDOM = require('react-dom');

var ListManager = require('./components/ListManager.jsx');
var PlainPanel = require('./components/PlainPanel.jsx');
var LittleBox = require('./components/LittleBox.jsx');
var SolidBox = require('./components/SolidBox.jsx');

ReactDOM.render(<ListManager title="Ingredients" />, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="Todo" />, document.getElementById('todo'));
ReactDOM.render(<ListManager title="Christmas" headingColor="#b31217" />, document.getElementById('christmas'));
ReactDOM.render(<PlainPanel panelColor="#1e3d7b" headingColor="#0099ff" />, document.getElementById('plainpanel'));
ReactDOM.render(<PlainPanel panelColor="#1e3d7b" headingColor="#ff99ff" />, document.getElementById('plainpanel2'));
ReactDOM.render(<SolidBox panelColor="#ff6600" temp="88 degrees" city="Orlando" />, document.getElementById('solidbox'));
ReactDOM.render(<LittleBox panelColor='white' headingColor="#0099ff" title="new visitors" subtitle="7k" />, document.getElementById('littlebox1'));
ReactDOM.render(<LittleBox panelColor='white' headingColor="#bf80ff" title="happy campers" subtitle="30" />, document.getElementById('littlebox2'));
ReactDOM.render(<LittleBox panelColor='white' headingColor="#cc3300" title="soup for dinner" subtitle="hmm, ok" />, document.getElementById('littlebox3'));
ReactDOM.render(<LittleBox panelColor='white' headingColor="#009900" title="take the car" subtitle="or bike" />, document.getElementById('littlebox4'));