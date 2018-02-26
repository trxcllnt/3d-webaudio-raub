'use strict';

const webaudio = require('web-audio-api');
const Speaker  = require('speaker');


module.exports = core => {
	
	if (core.webaudio) {
		return;
	}
	
	core.webaudio = webaudio;
	
	window.AudioContext = webaudio.AudioContext;
	
	
	const context = new webaudio.AudioContext();
	
	context.outStream = new Speaker({
		channels   : context.format.numberOfChannels,
		bitDepth   : context.format.bitDepth,
		sampleRate : context.sampleRate,
	})
	
	core.three.AudioContext.setContext(context);
	
};
