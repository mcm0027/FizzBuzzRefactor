$(document).ready(function() {

	function fizzbuzz(trueInt) {
		for (var i = 1; i <=trueInt; i++) {
			if (i % 3 === 0 && i % 5 === 0) {
				$("body").append("FizzBuzz <br><br>");
			} else if (i % 3 === 0) {
				$("body").append("Fizz <br><br>");
			} else if (i % 5 === 0) {
				$("body").append("Buzz <br><br>");
			} else {
				$("body").append(i + "<br><br>");
			}
		}
	}

	var noNum = true;
	var noDec = 1;
	while (noNum || noDec != 0) {
		var maxNum = prompt("Please enter the maximum number for FizzBuzzing:");

		trueInt = parseInt(maxNum);
		noNum = isNaN(parseFloat(trueInt));

		if (noNum) {
			alert("That wasn't a number!");
		}

		noDec = maxNum % 1;
		console.log(noDec);

		if (noDec != 0) {
			alert('Please enter a whole number (i.e. "10" not "10.5"')
		}
	}

	fizzbuzz(trueInt);
});

