function digitalRoot(n) {
	var sum = 0;
	var arr = n.toString().split("");
	do {
		arr.forEach(element => (sum += parseInt(element)));
		arr = [];
		arr = sum.toString().split("");
		sum = 0;
	}
	while (arr.length != 1)
	return parseInt(arr);
}
