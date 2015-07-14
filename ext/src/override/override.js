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
}


$('#form').on("submit", function(event){
  event.preventDefault();
  userName();
  $('#form').hide();
  $('.name-text-header').hide();
  $('.greeting').text("Aloha, " + viewername);
  console.log(viewername);
})



$('#puppy-button').on('click', function(event){
  event.preventDefault();

  var puppies="https://www.youtube.com/embed/b7WD-SpNX_I?autoplay=1&controls=0&t=2m0s&loop=1&rel=0&showinfo=0&autohide=1&wmode=transparent&hd=1"

  $('.youtube-video').attr("src", puppies)
})
