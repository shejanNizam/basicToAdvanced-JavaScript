function getData() {
  const response = fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = response.json();
  console.log(data);
}
getData();
