console.log(hello);
var hello="world";
/**Result:undefined
Interpreter:
console.log(hello);
var hello="world"; stays like an anchor
With let 
console.log(hello);
let hello="world";
Result:Uncaught ReferenceError: hello is not defined
**/



var needle = "haystack";
test();

function test(){
	var needle = "magnet";
	console.log(needle);
}

/**Result:magnet**/


var brendan = "super cool";
function print(){
	brendan = "only okay";
	console.log(brendan);
}
console.log(brendan);


/**Result: only okay**/


var food = "chicken";
console.log(food);
eat();
function eat(){
	food = "half-chicken";
	console.log(food);
	var food = "gone";
}

/** "chicken"
"half-chicken"**/


mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

/**Result:ERROR**/



console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

/** Result:undefined
rock
r&b
disco**/



dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
/**Result: 
"San Jose"
"Seattle"
"Burbank"
"San jose"  **/    
                
