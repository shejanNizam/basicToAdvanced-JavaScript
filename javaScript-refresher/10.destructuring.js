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

// normal destructuring
const { id, name, age } = user;

// multi layer destructuring
const {
  education: { degree },
} = user;

const {
  education: {
    school: { schoolName },
  },
} = user;
