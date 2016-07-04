var React = require('react');
var ReactDOM = require('react-dom');

var Fullpanel = require('./components/Fullpanel.jsx');
var Smallbox = require('./components/Smallbox.jsx');
var ImageBox = require('./components/ImageBox.jsx');
var SimpleTextBox = require('./components/SimpleTextBox.jsx');

ReactDOM.render(
	<SimpleTextBox 
		boldText="Lived-experiences are written into the bone - "
		text="Body-oriented healing practices can shift the narrative from the cellular level of our anatomy all the way up to our thinking-mind, enabling more empowered, balanced, and satisfying ways of perceiving and moving through the world." 
	/>, 
	document.getElementById('intro'));

ReactDOM.render(
	<Smallbox 
		title="Somatic Psychotherapy"
		text="Somatic psychotherapy is a form of counseling that honors both the explicit wisdom of the insightful-mind and the implicit wisdom of the feeling-body. This form of therapy is appropriate for most mental health challenges and is especially useful for healing trauma, addressing barriers to intimacy, and discovering new possibilities around navigating anxiety, depression, and chronic pain. Read more… " 
		img='../assets/watercolor-heart.png' />, document.getElementById('spbox'));


ReactDOM.render(
	<Smallbox 
		title="Massage" 
		text="Hatha Yoga and mindful movement practices cultivate embodiment and presence while releaseing habitual tension patterns. These practices foster psycho-physical resiliance, adaptability, descernment, and curiosity  - all important resources for navigating and enriching life-events and relationship dynamics. Learn more…"
		img='../assets/armstretch.png' />, document.getElementById('massagebox'));


ReactDOM.render(
	<Smallbox 
		title="Yoga"
		text="Therapeutic massage frees up tensions across all levels of the body and can address injuries, chronic pain patterns, and challenging emotional states. Techniques include deep tissue, myofascial release, and trigger point therapy, along with relaxation techniques, aromatherapy, and subtle energy work. Massage offers a safe space to receive touch and deep nurturing. Read more…" 
		img='../assets/yogalegs.png' />, document.getElementById('yogabox'));
ReactDOM.render(<ImageBox img='../assets/logo.png'width='170' height='160' />, document.getElementById('logo'));