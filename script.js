// example function call to display a dialog box
// let's comment out the code below, which is top- evel code that 
// automatically runs when the script is loaded
function clearStorage(){
  var answerlist = document.getElementById("answerlist");
  answerlist.innerHTML = "";
  localStorage.setItem("answerlist","");
}

function checkStorage (){
  var answerlist = document.getElementById("answerlist");
  var currentanswerlist = localStorage.getItem("answerlist");
  answerlist.innerHTML = currentanswerlist
}

function clearStorageGB(){
  var guestlist = document.getElementById("guestlist");
  guestlist.innerHTML = "";
  $("#guestlist")
  localStorage.setItem("guestlist","");
}

function checkStorageGB(){
  var guestlist = document.getElementById("guestlist");
  var currentguestlist = localStorage.getItem("guestlist");
  guestlist.innerHTML = currentguestlist
}


function submitForm(name, hometown) {
  var  guestlist = document.getElementById("guestlist");
  var  n = document.getElementById("name");
  var  h = document.getElementById("hometown");
  //saveLocal(name, hometown);
  saveRemote(name, hometown);
  guestlist.innerHTML += "<li>" + name + "." + hometown + "</li>";
  n.value = "";
  h.value = "";
  n.focus();
  return false;
}

function saveLocal(){
  var currentguestlist = localStorage.getItem("guestlist");
  localStorage.setitem("guestlist", currentguestlist + "<li>" + name + ". " + hometown + "</li>");
}

function saveRemote(name, hometown){
$.get("save.php", {"name":name,"hometown":hometown});
}