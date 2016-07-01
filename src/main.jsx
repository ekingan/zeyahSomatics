var React = require('react');
var ReactDOM = require('react-dom');

var Fullpanel = require('./components/Fullpanel.jsx');
var Smallbox = require('./components/Smallbox.jsx');

ReactDOM.render(<Fullpanel text="Zeyah is the best massage therapist and yoga instructor ever!" img='../assets/logo.png' />, document.getElementById('panel1'));
ReactDOM.render(<Smallbox headingColor='grey' panelColor='blue' text="Somatic Psychotherapy" img='../assets/watercolor-heart.png' />, document.getElementById('spbox'));
ReactDOM.render(<Smallbox text="Massage" img='../assets/armstretch.png' />, document.getElementById('massagebox'));
ReactDOM.render(<Smallbox text="Yoga" img='../assets/yogalegs.png' />, document.getElementById('yogabox'));