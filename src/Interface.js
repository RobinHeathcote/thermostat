function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
}

$(document).ready(function() {
  var thermostat = new Thermostat();
 updateTemperature();

 function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.displayStatus());
}


$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);

  });

  // $displayWeather('London');

function displayWeather(city) {
var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
var token = '&appid=f4e84488ed545c8e2321624871711808';
var units = '&units=metric';
$.get(url + token + units, function(data) {
$('#current-temperature').text(data.main.temp);

});
}


$('#temp-up').on('click', function() { // event listener
  thermostat.upButton() // update model
   updateTemperature(); // update view
})

$('#temp-down').click(function() {
  thermostat.downButton()
   updateTemperature();
})

$('#powersaving-button').click(function() {
  thermostat.powerSaveButton()
  $('#powersave').text(function(){
    if(thermostat.powerSave === true){
      return "ON"
    }else {
      return "OFF"
    }
  })

  $('#temperature-reset').click(function() {
    thermostat.resetButton()
   updateTemperature();
})
});
});
