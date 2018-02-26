'use strict';


module.exports = core => {
	
	if (core.webaudio) {
		return;
	}
	
	core.webaudio = {};
	
	require('./js')(core);
	
};
