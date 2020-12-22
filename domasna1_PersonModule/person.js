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

function isAdult(person) {
    return person.age >= 18 ? true : false;
}

module.exports = {
    getFullName,
    getData,
    isAdult
}