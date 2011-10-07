function chadsclick(b,e){
  geo();
}


function geo(){
  var suc = function(p) {
    textbox.setValue( p.coords.latitude + " " + p.coords.longitude);
  };
  var locFail = function() {
    document.getElementById("location").innerHTML = "So sorry but your gps isnt on";
  };
  navigator.geolocation.getCurrentPosition(suc, locFail);
}

function clockin(){
  var suc = function(p) {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var time = '';
    if(hours > 11){
      time = hours + ':' + minutes +' PM'
    } else {
      time = hours + ':' + minutes +' PM'
    }

    document.getElementById("ClockedIn").innerHTML =  'You have clocked in at: <br>' + time + "<br><br>Your location:<br>" + p.coords.latitude + "<br>" + p.coords.longitude;
  };
  var locFail = function() {
    document.getElementById("ClockedIn").innerHTML = "So sorry but your gps isnt on";
  };
 
 
  navigator.geolocation.getCurrentPosition(suc, locFail);
}
