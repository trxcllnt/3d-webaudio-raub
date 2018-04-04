'use strict';

const webaudio = require('waa-raub');


module.exports = core => {
	
	if (core.webaudio) {
		return;
	}
	
	core.webaudio = webaudio;
	
	window.AudioContext = webaudio.AudioContext;
	
};
