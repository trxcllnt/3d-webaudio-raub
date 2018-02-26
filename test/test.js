'use strict';

const { expect } = require('chai');

const plugin = require('3d-webaudio-raub');


describe('Node.js 3D WebAudio', () => {
	
	it(`exports a function`, () => {
		expect(plugin).to.be.a('function');
	});
	
	// TODO: tests, mocks
	
});
