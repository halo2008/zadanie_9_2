var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = maleNames.concat(femaleNames);
var newName = prompt();

if (allNames.indexOf(newName) === -1) {
 allNames.push(newName);
 console.log(allNames); 
}
else {
  console.log('Dwoch takich samych nam nie potrzeba')
}
