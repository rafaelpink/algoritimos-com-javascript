  var imgb = true
function touch(){
  var userName = prompt("Olá! Qual o seu nome?")

  if (userName) {
    alert("Prazer " + userName)
  }
  if (imgb==true) {
    document.getElementById('rockImg').src="img/rock_happy.png";
    imgb = false;
  }
  else {
    document.getElementById('rockImg').src="img/rock.png";
    imgb = true;
  }

}
