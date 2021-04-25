function fun() 
{  
	var table = document.getElementById("mytable");
  var row = table.insertRow(-1);
	var ctr=0;
	var c;
	while(ctr==0)
	{
		var a = prompt("Enter your name");  
		if (a != null) 
		{  
			var row = table.insertRow(-1);
			var cell1 = row.insertCell(0);
			cell1.innerHTML = a;
			var b = prompt("Enter the number of hours");
			var cell2 = row.insertCell(1);
			cell2.innerHTML = b;
			c=calculate(b);
			var cell3 = row.insertCell(2);
			cell3.innerHTML = c;
		}  

		else if(a== null)
		{
			return;
		}
	
	}
}  		

function calculate(b)
{
	var c=2;
	if(b>19)
	{
		c=10;
	}
	else if(b>3)
	{
		c+=(b-3)*0.5;
	}
	return c;

}
