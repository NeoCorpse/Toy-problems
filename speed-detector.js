function speedDetector() {
	let speed;
	// Prompts the user to input a number and repeats the prompt if the number
	// is in the wrong format
	while (true) {
		speed = +prompt('Please input the speed', '0');
		if (Number.isNaN(speed)) {
			alert('Ensure you input a number');
			continue;
		} else if (speed < 0) {
			alert('Please input a positive integer');
			continue;
		} else break;
	}

	if (speed < 70) {
		alert('Ok');
	} else {
		let points = Math.floor((speed - 70) / 5);
		if (points > 12) {
			alert(`Points: ${points}. License suspended`);
		} else {
			alert(`Points: ${points}`);
		}
	}
}
