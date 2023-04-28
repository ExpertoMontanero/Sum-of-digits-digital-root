function digitalRoot(n) {
	//temporary sum
	var sum = 0;
	//**int to array of chars
	var arr = n.toString().split("");
	do {
		//sum all elements as integers
		arr.forEach(element => (sum += parseInt(element)));
		//clean previous array
		arr = [];
		//**int to array of chars from sum integer
		arr = sum.toString().split("");
		//temporary sum=0 for the next iteration
		sum = 0;
	}
	//condition for ending loop when arr is only one cell
	while (arr.length != 1)
	//returning array last element as integer
	return parseInt(arr);
}
