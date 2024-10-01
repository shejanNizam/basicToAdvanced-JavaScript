// Object access related
const person = {
  name: "Nizam Uddin",
  age: 22,
  profession: "Developer",
  isMarrid: true,
};

const keys1 = Object.keys(person);
const values = Object.values(person);
delete person.profession;
console.log(person);

// ------------------

// access keys using loop
for (const props in person) {
  console.log(props, ":", person[props]);
}

const keys2 = Object.keys(person);
for (let key of keys) {
  console.log(key, ":", person[key]);
}

//-----------------
