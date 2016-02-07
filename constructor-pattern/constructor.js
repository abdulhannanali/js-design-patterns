// Object Constructors

var newObject = {}

// defining properties using Object.defineProperty
Object.defineProperty(newObject, "aKey", {
	value: "aValue",
	writable: false,
	enumerable: true,
	configurable: false
})

newObject.aKey = "changeValue"
console.log(newObject["aKey"])

// shorthand for defineProperty

function defineProperty(obj, key, value) {
	var config = {
		value: value,
		writable: true,
		enumerable: true,
		configurable: true
	}

	Object.defineProperty(obj, key, config)
}



var person = Object.create(Object.prototype)

defineProperty(person, "car", "Ferrari")
defineProperty(person, "name", "ass hole")
defineProperty(person, "hasBeard", true)


console.log(person)