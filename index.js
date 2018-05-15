'use strict';

const webaudio = require('webaudio-raub');


module.exports = core => {
	
	if (core.webaudio) {
		return;
	}
	
	core.webaudio = webaudio;
	
	core.window.AudioContext = webaudio.AudioContext;
	global.AudioContext = webaudio.AudioContext;
	
};
