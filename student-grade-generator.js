function getGrade() {
	let marks;
	// Prompts the user to input a number and repeats the prompt if the number
	// is in the wrong format
	while (true) {
		marks = +prompt('Please input your marks', '0');
		if (Number.isNaN(marks)) {
			alert('Ensure you input a number');
			continue;
		} else if (marks < 0 || marks > 100) {
			alert('Please input a number within the allowed range (between 0 and 100)');
			continue;
		} else break;
	}

	// Assigns a grade based on the input marks

	let grade;
	switch (true) {
		case marks > 79:
			grade = 'A';
			break;
		case marks > 59:
			grade = 'B';
			break;
		case marks > 49:
			grade = 'C';
			break;
		case marks > 39:
			grade = 'D';
			break;
		default:
			grade = 'E';
			break;
	}
	// Displays the grade, both on the console and in an `alert`
	alert(`Your grade is ${grade}`);
	return grade;
}
