function fib(){
	var temp1 = 0;
	var temp2 = 1;
	var sum = 1;
	function nacci(){
		console.log(sum);
		sum = temp1+temp2
		temp1=temp2;
		temp2=sum;
	}
	return nacci;
}
var fibCounter = fib();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
