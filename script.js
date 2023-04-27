function randomID() {
  var id12 = "";
  for (var i = 0; i < 12; i++) {
    id12 += parseInt(Math.random() * 10);
  }
  document.getElementById("placeholder").innerHTML = id12 + finddigit(id12);
}
function finddigit(id) {
  var base = 100000000000;
  var basenow; 
  var sum = 0; 
  for (var i = 13; i > 1; i--) {
    basenow = Math.floor(id / base); 
    id = id - basenow * base; 
    sum += basenow * i;
    base = base / 10;
  }
  var checkbit = (11 - (sum % 11)) % 10; 
  return checkbit;
}
