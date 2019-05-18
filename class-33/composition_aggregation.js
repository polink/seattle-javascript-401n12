class Item {
}

class Inheritance extends Item{ // Inheritance is known as an 'is a' relationship
	// Vinicio - everything in item becomes our own
	// We become item
}

class Dog extends Pet { // A dog 'is a' pet

}

class Composition { // Composition is knows as 'has a' relationship
	constructor(){
		// Vinicio - in composition, we create the item
		this.item = new Item();

	}
}


class Aggregation { // Aggregation is knows as 'has a' relationship 
	constructor(item){
		// Vinicio - we prefer aggregation, aggregation allows for dependency injection
		// via something we call inversion of control
		// Vinicio - in aggregation, we receive the item
		this.item = item;
	}
}


if(env.LOCALE === 'en-us')
{
	let object = new Dashboard(englishText);
}
if(env.LOCALE === 'fr-fr') {
	let object = new Dashboard(frenchText);
}
else {
	let object = new Object(testData);
}

let english =;
let japanese =;

{
}


{this.props.text['welcome']}


























