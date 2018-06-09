function mudaEstado(x)
{
	
	var display = document.getElementById(x).style.display;
	
	if (display=="none")
		document.getElementById(x).style.display='block';
	else
		document.getElementById(x).style.display='none';
	
}