import React from 'react';
import { render } from 'react-dom';
import LaunchTimer from './LaunchTimer';

setInterval(function(){
	render(<LaunchTimer />,document.getElementById('root'))
}, 1000);
