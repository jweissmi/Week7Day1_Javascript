//alert('Hello World!');
//document.write('Hello World');
//console.log('Hello World');

//var numberOfThings;
//numberOfThings = 5;

var myString = 'Hello World'
var numberOfThings = 1492;
var hasDog = Boolean(0);
var myOtherString = 'X';
var hamburger = 5.45;


document.write(myString);

document.write('<br/>');
document.write('<br/>');


document.write('Columbus Sailed the world in ' + numberOfThings + '.');

document.write('<br/>');
document.write('<br/>');

document.write(myOtherString + ' marks the spot.');

document.write('<br/>');
document.write('<br/>');

document.getElementById("otherBoolDemo").innerHTML =
	"Does Jim have a dog? " + hasDog;

function format(n, currency) {
	return currency + " " + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}

var numbers = [1, 12, 123, 1234, 12345, 123456, 1234567, 12345.67, 5.45];

document.write("<p>Currency Format:</p>");
for (var i = 0; i < numbers.length; i++) {
	document.write(format(numbers[i], "$") + "<br />");
}

document.write('<br/>');
document.write('<br/>');

document.write('I spent $' + hamburger + ' on a hamburger.')