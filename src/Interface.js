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