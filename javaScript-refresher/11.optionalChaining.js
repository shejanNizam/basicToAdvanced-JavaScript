// optional chaining
const user = {
  id: 45,
  name: "Nizam",
  age: 22,
  education: {
    degree: "Undergraduate",
    school: {
      schoolName: "XYZ School and Collage",
    },
  },
};

const schoolName = user?.education?.school?.schoolName;
console.log(schoolName); // XYZ School and Collage
