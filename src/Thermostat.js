function Thermostat() {
	 this.temperature = 20
	 this.powerSaving = true
	};
	
Thermostat.prototype.upButton = function(amount) {
		this.temperature += amount;
		if (this.powerSaving === true){
			if(this.temperature > 25){
				this.temperature = 25
				throw new Error ('Power saving mode is on, it cannot go above 25');
			}
		}	else { if(this.temperature > 32){
				this.temperature = 32
			};
		};
	};

Thermostat.prototype.downButton = function(amount) {
		this.temperature -= amount
		if (this.temperature < 10){
			this.temperature = 10
			throw new Error ('It can not go below 10');
		};
Thermostat.prototype.powerSaveSwitch = function(amount) {
		this.powerSaving = !(this.powerSaving)
};
Thermostat.prototype.reset = function () {
	this.temperature = 20
	};

	Thermostat.prototype.displayStatus = function () {
		if (this.temperature < 18) {
			return 'Low energy usage'
		} else if (this.temperature < 25) {
			return 'Medium energy usage'
		} else {
			return 'High energy usage'
		}
	};


};
