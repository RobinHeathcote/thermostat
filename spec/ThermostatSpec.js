'user strict';

describe('Thermostat', function() {
   var thermostat;
   beforeEach(function(){
		thermostat = new Thermostat();
		});

 it('has a temperature of 20 degrees', function() {
 		expect(thermostat.temperature).toEqual(20);
 });

 it('can increase temperature when push up button', function() {
 		thermostat.upButton(1)
 		expect(thermostat.temperature).toEqual(21);
 });

 it('can decrease temperature when push down button', function() {
 		thermostat.downButton(1)
 		expect(thermostat.temperature).toEqual(19);
 });

 it('raises an error when temperature gets 10 degrees', function() {
 		expect(function(){thermostat.downButton(11)}).toThrowError('It can not go below 10');
    expect(thermostat.temperature).toEqual(10);
	});

  it('has powersaving mode on by default', function(){
    expect(thermostat.powerSaving).toEqual(true);
  });

  it('has powersaving mode on and raises error if temperature rises above 25', function(){
  expect(function(){thermostat.upButton(6)}).toThrowError('Power saving mode is on, it cannot go above 25');
  expect(thermostat.temperature).toEqual(25);
});
  it('when powersaving mode is off the max temperature is 32', function(){
    thermostat.powerSaveSwitch()
    thermostat.upButton(15)
    expect(thermostat.temperature).toEqual(32);
  });

  it('can reset the temperature to 20 by pressing rest', function(){
    thermostat.upButton(5)
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20);
  });

  it('should show low energy usage on less than 18 degrees', function(){
    thermostat.downButton(5)
    expect(thermostat.displayStatus()).toEqual('Low energy usage')
  });
  it('should show medium energy usage on less than 25 degrees', function(){
    expect(thermostat.displayStatus()).toEqual('Medium energy usage')
  });
  it('should show high energy usage on more than 24 degrees', function(){
    thermostat.powerSaveSwitch()
    thermostat.upButton(6)
    expect(thermostat.displayStatus()).toEqual('High energy usage')
  });

});
