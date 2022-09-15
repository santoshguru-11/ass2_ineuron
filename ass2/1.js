
function checkTriangle(x, y, z)
{
	
	// Check for equilateral triangle
	if (x == y && y == z)
		document.write("Equilateral Triangle");

	// Check for isosceles triangle
	else if (x == y || y == z || z == x)
		document.write("Isosceles Triangle");

	// Otherwise scalene triangle
	else
		document.write("Scalene Triangle");
}

var x= parseInt(prompt('first side '));
var y= parseInt(prompt('second side '));
var z= parseInt(prompt('third side '));
checkTriangle(x, y, z);