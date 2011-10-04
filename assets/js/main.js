function geo(){
  var suc = function(p) {
    document.getElementById("location").innerHTML = p.coords.latitude + " " + p.coords.longitude;
  };
  var locFail = function() {
    document.getElementById("location").innerHTML = "So sorry but your gps isnt on";
  };
  navigator.geolocation.getCurrentPosition(suc, locFail);
}
function vibratephone(){
  navigator.notification.vibrate(0);
}
