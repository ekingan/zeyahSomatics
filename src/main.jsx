var React = require('react');
var ReactDOM = require('react-dom');

var Fullpanel = require('./components/Fullpanel.jsx');
var Smallbox = require('./components/Smallbox.jsx');
var ImageBox = require('./components/ImageBox.jsx');
var SimpleTextBox = require('./components/SimpleTextBox.jsx');

ReactDOM.render(<SimpleTextBox text="Zeyah is the best massage therapist and yoga instructor ever!" />, document.getElementById('intro'));
ReactDOM.render(<Smallbox text="Somatic Psychotherapy" img='../assets/watercolor-heart.png' />, document.getElementById('spbox'));
ReactDOM.render(<Smallbox text="Massage" img='../assets/armstretch.png' />, document.getElementById('massagebox'));
ReactDOM.render(<Smallbox text="Yoga" img='../assets/yogalegs.png' />, document.getElementById('yogabox'));
ReactDOM.render(<ImageBox img='../assets/logo.png'width='200' height='180' />, document.getElementById('logo'));