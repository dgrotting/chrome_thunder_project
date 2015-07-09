window.onload = function() {
  setInterval( function() {setTime();} , 50);
}

function setTime() {
  document.getElementById ('date-time').firstChild.data = new Date().toLocaleTimeString();
}
