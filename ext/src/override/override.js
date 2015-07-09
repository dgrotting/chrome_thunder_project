// Clock Function

window.onload = function() {
  setInterval( function() {setTime();} , 50);
}

function setTime() {
  document.getElementById ('date-time').firstChild.data = new Date().toLocaleTimeString();
}

// Gathering User's Name

function userName() {
    var input = document.getElementById("userInput").value;
    // console.log(input);
    alert(input);
}


$('#form').on("submit", function(event){
  event.preventDefault();
  userName();
})