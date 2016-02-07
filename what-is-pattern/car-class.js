// JavaScript is a class-less programming language 
// but classes can be simulated in JavaScript

function Car (model) {
	this.model = model
	this.color = "silver"
	this.year = 2012

	this.getInfo = function () {
		return this.model + " " + this.year
	}
}

var myCar = new Car("Ferrari")
console.log(myCar.getInfo())