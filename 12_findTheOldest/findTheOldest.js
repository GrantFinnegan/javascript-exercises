const findTheOldest = function(peopleArray) {

    function getAge(person){
        return person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : (new Date()).getFullYear() - person.yearOfBirth;
    }

    function findOldestPerson(oldestPerson, nextPerson){
        if ( getAge(oldestPerson) > getAge(nextPerson)) {
            return oldestPerson;
        }
        else return nextPerson;
    }

    return peopleArray.reduce(findOldestPerson);
};

// Do not edit below this line
module.exports = findTheOldest;
