$(document).ready(function() {

var noNum = true;

while (noNum) {
var maxNum = prompt("Please enter the maximum number for FizzBuzzing:");

trueInt = parseInt(maxNum);
noNum = isNaN(parseFloat(trueInt));

if (noNum) {
	alert("That wasn't a number!");
}
}

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
});
