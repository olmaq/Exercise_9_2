var women = ['Iza', 'Gosia', 'Krysia', 'Ala'];
var men = ['Piotrek', 'Fredek', 'Stefan', 'Franek'];

var allMen = women.concat(men);
console.log(allMen);

var addName = 'Tadek';
var indexOfname = allMen.indexOf(addName);

if (allMen[indexOfname] == addName) {
		console.log('Name already exists');
	} else {
		allMen.push(addName) && console.log(allMen);
};


var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames =femaleNames.concat(maleNames);

var newName = 'Marian';
if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
};
console.log(allNames);