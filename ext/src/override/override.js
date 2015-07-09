// Clock Function

window.onload = function() {
  setInterval( function() {setTime();} , 50);
}

function setTime() {
  document.getElementById ('date-time').firstChild.data = new Date().toLocaleTimeString();
}

// Gathering User's Name

function userName() {
    viewername = document.getElementById("userInput").value;
    // console.log(input);
    // alert(input);
}


$('#form').on("submit", function(event){
  event.preventDefault();
  userName();
  $('#form').hide();
  $('.name-text-header').hide();
  $('.greeting').text("Aloha, " + viewername);
  console.log(viewername);
})