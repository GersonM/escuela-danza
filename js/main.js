function maximoDeDosNumeros(num1, num2, num3)
{
	var arr = [num1, num2, num3];
	return Math.max(num1, num2, num3);
}

function esVocal(caracter)
{
	var total = 1;

	for	(var i in caracter)
	{
		total = total * caracter[i];
	}

	if (isNaN(total))
	{
		return 'Error';
	}else{

		return total;
	}
}

