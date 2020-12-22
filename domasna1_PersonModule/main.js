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

// Gi povikav funkciite na ovoj nacin. Mislam deka e podobro da si gi povikam kako funkcii i da si gi zapisam vo promenliva, pa potoa da si ja koristam samo promenlivata.
// Toa bi go iskoristil dokolku treba mnogu pati da ja povikam nekoja funkcija. Vo ovoj slucaj gi povikuvam samo po ednas..

const fullName = personModule.getFullName(person1);
console.log(fullName);

const personData = personModule.getData(person2);
console.log(personData);

const isAdult = personModule.isAdult(person1);
console.log(isAdult);
/*

Go promeniv kodot ovaa proverka ja staviv vo person modulot

if(isAdult === true)
{
    console.log('Polnoleten');
}
else
{
    console.log('Maloleten');
}
*/