var React = require('react');
var ReactDOM = require('react-dom');

var Fullpanel = require('./components/Fullpanel.jsx');
var Smallbox = require('./components/Smallbox.jsx');
var ImageBox = require('./components/ImageBox.jsx');
var SimpleTextBox = require('./components/SimpleTextBox.jsx');
var LargeBox = require('./components/LargeBox.jsx');
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
		title="Yoga and Mindful Movement" 
		text="Hatha Yoga and mindful movement practices cultivate embodiment and presence while releaseing habitual tension patterns. These practices foster psycho-physical resiliance, adaptability, descernment, and curiosity  - all important resources for navigating and enriching life-events and relationship dynamics. Learn more…"
		img='../assets/armstretch.png' />, document.getElementById('massagebox'));


ReactDOM.render(
	<Smallbox 
		title="Massage"
		text="Therapeutic massage frees up tensions across all levels of the body and can address injuries, chronic pain patterns, and challenging emotional states. Techniques include deep tissue, myofascial release, and trigger point therapy, along with relaxation techniques, aromatherapy, and subtle energy work. Massage offers a safe space to receive touch and deep nurturing. Read more…" 
		img='../assets/yogalegs.png' />, document.getElementById('yogabox'));


ReactDOM.render(
	<ImageBox 
		img='../assets/logo.png'
		width='170' 
		height='160' />, document.getElementById('logo'));

ReactDOM.render(
	<LargeBox
		blockTitle='About Zeyah'
		img='../assets/headshot.jpg'
		title='“The moment we choose to love we begin to move against domination, against oppression. The moment we choose to love we begin to move towards freedom, to act in ways that liberate ourselves and others. That action is the testimony of love as the practice of freedom.” ~ Bell Hooks'
		title1='Philosophical Approach:  '
		text1='My background in community organizing and social justice work inspires my perspective as a healthcare provider. The quote above points to the challenging yet powerful task of cultivating inner states that give rise to liberation on both personal and systemic levels. This challenges the notion that we are isolated or solely responsible for the hardships we face. I approach mind-body healing from the assumption that everything exists within a context – emotional states exist within the greater context of the body, our bodies within context of community, our community within context of greater societal systems, and all of this held within our natural surrounding, whether that is in an urban or rural settings. These contexts influence one another and I hope that in supporting freedom, balance, and resilience in individuals these qualities will spread into greater context making for a more peaceful and equitable world. '
		title2='Background:  '
		text2='I grew up in a household of artist and healthcare practitioners, which influenced me from a young age to pursue the healing arts. I volunteered for many years as a sexual health educator, HIV test counselor, and queer youth empowerment advocate. My bachelor’s degree, community studies – a social justice major, supported this work. Simultaneously, I started professionally practicing massage at 17 years old and have continued to pursue different aspects of healing since then. I have studied and taught anatomy, yoga, and other mindful-movement modalities extensively. After a long journey of preparing for medical school, I switched gears and pursued a master’s degree in somatic psychotherapy. I have partake in ongoing training in trauma healing, Hakomi – an experiential and mindful-based approach to healing, and body-oriented couples therapy.  Continuing education and consultation are important aspects of my professional practice in order to continuously broaden my perspective and stay up to date on best-practice.'
 		width='220'
 		height='190'
 		/>, document.getElementById('about'));

