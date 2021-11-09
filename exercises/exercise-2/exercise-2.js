let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

//Task 1:

function gryffindorOccupants(hogwarts) {
  let names = [];
  for(let i = 0; i < hogwarts.length; i++){
    let {house, firstName, lastName} = hogwarts[i]; 
    if(house === "Gryffindor"){
      names.push(`${firstName} ${lastName}`);
    }
  }
  return names.join("\n");
}

console.log(gryffindorOccupants(hogwarts));

//Task 2 

function teacherWhoHasPets(hogwarts) {
  let teacherNames = [];
  for(let i = 0; i < hogwarts.length; i++){
    let { occupation, pet, firstName, lastName } = hogwarts[i];
    if(occupation === "Teacher" && pet !== null) {
      teacherNames.push(`${firstName} ${lastName}`);
    }
  }
  return teacherNames.join("\n");
}


console.log(teacherWhoHasPets(hogwarts));



