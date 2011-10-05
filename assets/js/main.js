function chadsclick(b,e){
  geo();
}



var textbox = new Ext.form.Text({
  label: 'Edit',
  ui:'dark'
});

var checkbox = new Ext.form.Checkbox({
  label: 'Checky 1'
});
var radioone = new Ext.form.Radio({
  label: 'Radio 1',
  name: 'radgrp'
});
var radiotwo = new Ext.form.Radio({
  label: 'radio 2',
  name: 'radgrp'
});

var button = new Ext.Button({
  text: 'New button',
  width: '200',
  handler: chadsclick,
  centered: true
  
});

var spinner = new Ext.form.Spinner({
    minValue: 0,
    maxValue: 100,
    incrementValue: 2,
    cycle: true
}); 

Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,



    onReady : function() {
      var panel = new Ext.TabPanel({
          fullscreen: true,
          ui   : 'light',
          
          items: [
              {
                  title: 'maxTime 1',
                  items: [ textbox,button,checkbox ]
              },
              {
                  title: 'maxTime 2',
                  items: [ spinner, radioone,radiotwo ]
              }
          ]
      });
    }
    
    
    
    
    
    
    
});


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
