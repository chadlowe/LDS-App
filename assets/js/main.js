Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady : function() {
        Ext.regModel('Contact', {
            fields: ['firstName', 'lastName']
        });

        var groupingBase = {
            itemTpl: '<div class="contact2"><strong>{firstName}</strong> {lastName}</div>',
            selModel: {
                mode: 'SINGLE',
                allowDeselect: true
            },
            grouped: true,
            indexBar: false,

            onItemDisclosure: {
                scope: 'test',
                handler: function(record, btn, index) {
                    alert('Disclose more info for ' + record.get('firstName'));
                }
            },

            store: new Ext.data.Store({
                model: 'Contact',
                sorters: 'firstName',

                getGroupString : function(record) {
                    return record.get('firstName')[0];
                },

                data: [
                    {firstName: 'Tommy', lastName: 'Maintz'},
                    {firstName: 'Ed', lastName: 'Spencer'},
                    {firstName: 'Jamie', lastName: 'Avins'},
                    {firstName: 'Aaron', lastName: 'Conran'},
                    {firstName: 'Dave', lastName: 'Kaneda'},
                    {firstName: 'Michael', lastName: 'Mullany'},
                    {firstName: 'Abraham', lastName: 'Elias'},
                    {firstName: 'Jay', lastName: 'Robinson'},
                    {firstName: 'Tommy', lastName: 'Maintz'},
                    {firstName: 'Ed', lastName: 'Spencer'},
                    {firstName: 'Jamie', lastName: 'Avins'},
                    {firstName: 'Aaron', lastName: 'Conran'},
                    {firstName: 'Ape', lastName: 'Evilias'},
                    {firstName: 'Dave', lastName: 'Kaneda'},
                    {firstName: 'Michael', lastName: 'Mullany'},
                    {firstName: 'Abraham', lastName: 'Elias'},
                    {firstName: 'Jay', lastName: 'Robinson'},
                    {firstName: 'Tommy', lastName: 'Maintz'},
                    {firstName: 'Ed', lastName: 'Spencer'},
                    {firstName: 'Jamie', lastName: 'Avins'},
                    {firstName: 'Aaron', lastName: 'Conran'},
                    {firstName: 'Dave', lastName: 'Kaneda'},
                    {firstName: 'Michael', lastName: 'Mullany'},
                    {firstName: 'Abraham', lastName: 'Elias'},
                    {firstName: 'Jay', lastName: 'Robinson'},
                    {firstName: 'Tommy', lastName: 'Maintz'},
                    {firstName: 'Ed', lastName: 'Spencer'},
                    {firstName: 'Jamie', lastName: 'Avins'},
                    {firstName: 'Aaron', lastName: 'Conran'},
                    {firstName: 'Dave', lastName: 'Kaneda'},
                    {firstName: 'Michael', lastName: 'Mullany'},
                    {firstName: 'Abraham', lastName: 'Elias'},
                    {firstName: 'Jay', lastName: 'Robinson'},
                    {firstName: 'Tommy', lastName: 'Maintz'},
                    {firstName: 'Ed', lastName: 'Spencer'},
                    {firstName: 'Jamie', lastName: 'Avins'},
                    {firstName: 'Aaron', lastName: 'Conran'},
                    {firstName: 'Dave', lastName: 'Kaneda'},
                    {firstName: 'Michael', lastName: 'Mullany'},
                    {firstName: 'Abraham', lastName: 'Elias'},
                    {firstName: 'Jay', lastName: 'Robinson'},
                    {firstName: 'Tommy', lastName: 'Maintz'},
                    {firstName: 'Ed', lastName: 'Spencer'},
                    {firstName: 'Jamie', lastName: 'Avins'},
                    {firstName: 'Aaron', lastName: 'Conran'},
                    {firstName: 'Ape', lastName: 'Evilias'},
                    {firstName: 'Dave', lastName: 'Kaneda'},
                    {firstName: 'Michael', lastName: 'Mullany'},
                    {firstName: 'Abraham', lastName: 'Elias'},
                    {firstName: 'Jay', lastName: 'Robinson'},
                    {firstName: 'Tommy', lastName: 'Maintz'},
                    {firstName: 'Ed', lastName: 'Spencer'},
                    {firstName: 'Jamie', lastName: 'Avins'},
                    {firstName: 'Aaron', lastName: 'Conran'},
                    {firstName: 'Dave', lastName: 'Kaneda'},
                    {firstName: 'Michael', lastName: 'Mullany'},
                    {firstName: 'Abraham', lastName: 'Elias'},
                    {firstName: 'Jay', lastName: 'Robinson'},
                    {firstName: 'Tommy', lastName: 'Maintz'},
                    {firstName: 'Ed', lastName: 'Spencer'},
                    {firstName: 'Jamie', lastName: 'Avins'},
                    {firstName: 'Aaron', lastName: 'Conran'},
                    {firstName: 'Dave', lastName: 'Kaneda'},
                    {firstName: 'Michael', lastName: 'Mullany'},
                    {firstName: 'Abraham', lastName: 'Elias'},
                    {firstName: 'Jay', lastName: 'Robinson'},
                    {firstName: 'Tommy', lastName: 'Maintz'},
                    {firstName: 'Ed', lastName: 'Spencer'},
                    {firstName: 'Jamie', lastName: 'Avins'},
                    {firstName: 'Aaron', lastName: 'Conran'},
                    {firstName: 'Dave', lastName: 'Kaneda'},
                    {firstName: 'Michael', lastName: 'Mullany'},
                    {firstName: 'Abraham', lastName: 'Elias'},
                    {firstName: 'Jay', lastName: 'Robinson'},
                    {firstName: 'Tommy', lastName: 'Maintz'},
                    {firstName: 'Ed', lastName: 'Spencer'},
                    {firstName: 'Jamie', lastName: 'Avins'},
                    {firstName: 'Aaron', lastName: 'Conran'},
                    {firstName: 'Ape', lastName: 'Evilias'},
                    {firstName: 'Dave', lastName: 'Kaneda'},
                    {firstName: 'Michael', lastName: 'Mullany'},
                    {firstName: 'Abraham', lastName: 'Elias'},
                    {firstName: 'Jay', lastName: 'Robinson'},
                    {firstName: 'Tommy', lastName: 'Maintz'},
                    {firstName: 'Ed', lastName: 'Spencer'},
                    {firstName: 'Jamie', lastName: 'Avins'},
                    {firstName: 'Aaron', lastName: 'Conran'},
                    {firstName: 'Dave', lastName: 'Kaneda'},
                    {firstName: 'Michael', lastName: 'Mullany'},
                    {firstName: 'Abraham', lastName: 'Elias'},
                    {firstName: 'Jay', lastName: 'Robinson'},
                    {firstName: 'Tommy', lastName: 'Maintz'},
                    {firstName: 'Ed', lastName: 'Spencer'},
                    {firstName: 'Jamie', lastName: 'Avins'},
                    {firstName: 'Aaron', lastName: 'Conran'},
                    {firstName: 'Dave', lastName: 'Kaneda'},
                    {firstName: 'Michael', lastName: 'Mullany'},
                    {firstName: 'Abraham', lastName: 'Elias'},
                    {firstName: 'Jay', lastName: 'Robinson'},
                    {firstName: 'Tommy', lastName: 'Maintz'},
                    {firstName: 'Ed', lastName: 'Spencer'},
                    {firstName: 'Jamie', lastName: 'Avins'},
                    {firstName: 'Aaron', lastName: 'Conran'},
                    {firstName: 'Dave', lastName: 'Kaneda'},
                    {firstName: 'Michael', lastName: 'Mullany'},
                    {firstName: 'Abraham', lastName: 'Elias'},
                    {firstName: 'Jay', lastName: 'Robinson'},
                    {firstName: 'Tommy', lastName: 'Maintz'},
                    {firstName: 'Ed', lastName: 'Spencer'},
                    {firstName: 'Jamie', lastName: 'Avins'},
                    {firstName: 'Aaron', lastName: 'Conran'},
                    {firstName: 'Ape', lastName: 'Evilias'},
                    {firstName: 'Dave', lastName: 'Kaneda'},
                    {firstName: 'Michael', lastName: 'Mullany'},
                    {firstName: 'Abraham', lastName: 'Elias'},
                    {firstName: 'Jay', lastName: 'Robinson'},
                    {firstName: 'Tommy', lastName: 'Maintz'},
                    {firstName: 'Ed', lastName: 'Spencer'},
                    {firstName: 'Jamie', lastName: 'Avins'},
                    {firstName: 'Aaron', lastName: 'Conran'},
                    {firstName: 'Dave', lastName: 'Kaneda'},
                    {firstName: 'Michael', lastName: 'Mullany'},
                    {firstName: 'Abraham', lastName: 'Elias'},
                    {firstName: 'Jay', lastName: 'Robinson'},
                    {firstName: 'Tommy', lastName: 'Maintz'},
                    {firstName: 'Ed', lastName: 'Spencer'},
                    {firstName: 'Jamie', lastName: 'Avins'},
                    {firstName: 'Aaron', lastName: 'Conran'},
                    {firstName: 'Dave', lastName: 'Kaneda'},
                    {firstName: 'Michael', lastName: 'Mullany'},
                    {firstName: 'Abraham', lastName: 'Elias'},
                    {firstName: 'Jay', lastName: 'Robinson'},
                    {firstName: 'Zed', lastName: 'Zacharias'}
                ]
            })
        };


        if (!Ext.is.Phone) {
            new Ext.List(Ext.apply(groupingBase, {
                floating: true,
                width: 350,
                height: 370,
                centered: true,
                modal: true,
                hideOnMaskTap: false
            })).show();
        }
        else {
            new Ext.List(Ext.apply(groupingBase, {
                fullscreen: true
            }));
        }
    }
});


function geo(){
  var suc = function(p) {
    document.getElementById("location").innerHTML = p.coords.latitude + " " + p.coords.longitude;
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
