
function checkPrime(a,b)

	for (var i = a; i <= b; i++) {
		
		if (i == 1 || i == 0)
			continue;

		
		var flag = 1;

		for (var j = 2; j <= i / 2; ++j) {
			if (i % j == 0) {
				flag = 0;
				break;
			}
		}
		if (flag == 1)
			document.write(i," ");
	}
var a = parseInt(prompt('Enter a positive integer: '));
var b = parseInt(prompt('Enter a positive integer: '));

checkPrime(a,b);
