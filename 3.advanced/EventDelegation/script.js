const list = document.getElementById("list");

list.addEventListener("click", (event) => {
  //   console.log(event);
  if (event.target.matches("li")) {
    if (event.target.innerText === "JavaScript") {
      event.target.style.backgroundColor = "purple";
    } else if (event.target.innerText === "JAVA") {
      event.target.style.backgroundColor = "yellow";
    } else {
      event.target.style.backgroundColor = "pink";
    }
  }
});

// add new element
function addNewElement() {
  //   console.log("Clicked");
  const newElement = document.createElement("li");
  newElement.textContent = "Dot Net";
  list.appendChild(newElement);
}

// matches() reference --> https://www.w3schools.com/jsref/met_element_matches.asp
