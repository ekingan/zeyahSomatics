var React = require('react');
var ReactDOM = require('react-dom');

var PlainPanel = require('./components/PlainPanel.jsx');
var LittleBox = require('./components/LittleBox.jsx');


ReactDOM.render(<PlainPanel panelColor="#1e3d7b" headingColor="#0099ff" />, document.getElementById('plainpanel'));
ReactDOM.render(<PlainPanel panelColor="#1e3d7b" headingColor="#ff99ff" />, document.getElementById('plainpanel2'));
ReactDOM.render(<LittleBox panelColor='white' headingColor="#0099ff" title="new visitors" subtitle="7k" />, document.getElementById('littlebox1'));
ReactDOM.render(<LittleBox panelColor='white' headingColor="#bf80ff" title="happy campers" subtitle="30" />, document.getElementById('littlebox2'));
ReactDOM.render(<LittleBox panelColor='white' headingColor="#cc3300" title="soup for dinner" subtitle="hmm, ok" />, document.getElementById('littlebox3'));
ReactDOM.render(<LittleBox panelColor='white' headingColor="#009900" title="take the car" subtitle="or bike" />, document.getElementById('littlebox4'));