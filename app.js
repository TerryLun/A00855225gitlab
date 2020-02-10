document.addEventListener('DOMContentLoaded', function(event) {
  //function to check if value is empty
  function isEmpty(val) {
    if (val === "") {
      return true;
    } else {
      return false;
    }
  }

  //add movie to list on pressing enter key
  var input = document.getElementById("addMovie");
  input.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      document.querySelector(".btn-primary").click();
    }
  })

  //function to add movie into list
  function addMovie(movie) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(movie);
    node.appendChild(textNode);
    document.querySelector(".list-group").appendChild(node);
    node.classList.add("movie-item", "flex")
  }

  //"add movie" button functionality
  document.querySelector(".btn-primary").onclick = function(e) {
    e.preventDefault();
    var userInput = document.getElementById("addMovie").value;

    //if input field is not empty, add user input to movie list
    if (!isEmpty(userInput)) {
      addMovie(userInput);
    } else {
      alert("Error");
    }

    console.log(userInput);
  }

  //"clear movie" button functionality
  document.querySelector(".btn-danger").onclick = function(e) {
    e.preventDefault();

    let listItems = document.querySelectorAll("li");
    listItems.forEach(item => document.querySelector("ul").removeChild(item))
  }
})
