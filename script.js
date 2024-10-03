// let first = "I Learn";
// let second = "JS";
// let result = first + " " + second;

// console.log(result);
async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
}

function bigData() {
  return getData();
}

(async function () {
  const result = await bigData();
  return result;
})();
