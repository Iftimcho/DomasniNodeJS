const personModule = require('./person');

const person1 = {
    firstName: 'Timce',
    lastName: 'Pop-Icovski',
    age: 26,
    city: 'Kavadarci'
}

const person2 = {
    firstName: 'Ivona',
    lastName: 'Ramneshova',
    age: 12,
    city: 'Kavadarci'
}

const fullName = personModule.getFullName(person1);
console.log(fullName);

const personData = personModule.getData(person2);
console.log(personData);

const isAdult = personModule.isAdult(person2);
if(isAdult === true)
{
    console.log('Polnoleten');
}
else
{
    console.log('Maloleten');
}