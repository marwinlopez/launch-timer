import React from 'react';

export default class LaunchTimer extends React.Component{
	constructor(props){
		super(props);
		this.year = this.year.bind(this);
	}

	year(){
		let finalDate = new Date('2017','12','31','23','60','60'); 
		let initialDate = new Date();
		let difference = (finalDate.getTime() - initialDate.getTime()) / 1000;
		let days = Math.floor(difference / 86400);
		difference = difference - (86400 * days);
		let hours = Math.floor(difference / 3600);
		difference = difference - (3600 * hours);
		let minutes = Math.floor(difference / 60);
		difference = difference - (60 * minutes);
		let seconds = Math.floor(difference);
		(hours < 10) ? hours = "0" + hours : hours = hours;
		(minutes < 10) ? minutes = "0" + minutes : minutes = minutes;
		(seconds < 10) ? seconds = "0" + seconds : seconds = seconds;
		return (
			<div>
		      <h1>launch-timer</h1>
		      <span>Years: {days} </span>
		      <span>Hours: {hours} </span>
		      <span>Minutes: {minutes} </span>
		      <span>Seconds: {seconds}</span>
		    </div>
		);
	}

	
	render(){
		return (
			<section>
				{this.year()}
			</section>
		);
	}
}
