const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");

parent.addEventListener("click", eventListener);
form.addEventListener("click", eventListener, {
  capture: true,
}); // or
// form.addEventListener("click", eventListener, true);
button.addEventListener("click", eventListener);

/*

 *** Event Bubbling -- default behaviour { child to parent }

parent.addEventListener("click", eventListener);
form.addEventListener("click", eventListener);
button.addEventListener("click", eventListener);

function eventListener(event) {
  //   console.log(event.target); // --> all result are same ( button element )
  //   console.log(event.currentTarget); // --> button --> form --> div
  //   console.log(this); // --> button --> form --> div
}
  Note: currentTarget & this are same here
 */

/*

  *** Event Capturing or Trickling -- reverse of Event Bubbling

  parent.addEventListener("click", eventListener, {
  capture: true,
});
form.addEventListener("click", eventListener, {
  capture: true,
});
button.addEventListener("click", eventListener, {
  capture: true,
});

function eventListener() {
  console.log(this.tagName); --> div --> form --> button
}

*** Random Order -- first Capturing then Bubbling

parent.addEventListener("click", eventListener);
form.addEventListener("click", eventListener, {
  capture: true,
});
button.addEventListener("click", eventListener);

function eventListener() {
  console.log(this.tagName); --> form --> button --> div
}


  */

function eventListener() {
  console.log(this.tagName);
}
