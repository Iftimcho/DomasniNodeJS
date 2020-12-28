function getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
}

function getData(person) {
    return {
        "firstName" : person.firstName,
        "lastName" : person.lastName,
        "age" : person.age,
        "city" : person.city
    }
}

// Iskoristiv ternaren operator za da vratam vrednost spored toa koj uslov e ispolnet
function isAdult(person) {
    return person.age >= 18 ? 'Polnoleten' : 'Maloleten';
}

module.exports = {
    getFullName,
    getData,
    isAdult
}