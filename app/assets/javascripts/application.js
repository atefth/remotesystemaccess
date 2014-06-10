// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .

var isLightOn = false;

function toggleLight () {
	var currentdate = new Date(); 
	var datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " @ "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();
	if (isLightOn) {
		$("#light_off").show();
		$("#light_on").hide();
		var string = "<p>Light was turned off at " + datetime + "</P>";
		$("#log").append(string);
		isLightOn = false;
	}else{
		$("#light_off").hide();
		$("#light_on").show();
		var string = "<p>Light was turned on at " + datetime + "</P>";
		$("#log").append(string);
		isLightOn = true;
	};
}

var isShowerOn = false;

function toggleShower () {
	var currentdate = new Date(); 
	var datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " @ "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();
	if (isShowerOn) {
		$("#shower_off").show();
		$("#shower_on").hide();
		var string = "<p>Shower was turned off at " + datetime + "</P>";
		$("#log").append(string);
		isShowerOn = false;
	}else{
		$("#shower_off").hide();
		$("#shower_on").show();
		var string = "<p>Shower was turned on at " + datetime + "</P>";
		$("#log").append(string);
		isShowerOn = true;
	};
}

var isDoorOpen = false;

function toggleDoor () {
	var currentdate = new Date(); 
	var datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " @ "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();
	if (isDoorOpen) {
		$("#door_closed").show();
		$("#door_open").hide();
		var string = "<p>Door was opened at " + datetime + "</P>";
		$("#log").append(string);
		isDoorOpen = false;
	}else{
		$("#door_closed").hide();
		$("#door_open").show();
		var string = "<p>Door was closed at " + datetime + "</P>";
		$("#log").append(string);
		isDoorOpen = true;
	};
}