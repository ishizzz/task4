function movies()
{
  var table = document.getElementById("mytable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var a=0;

  cell1.innerHTML = document.getElementById("name").value;
  cell2.innerHTML = document.getElementById("number").value;
  cell3.innerHTML = document.getElementById("movie").value;
  cell4.innerHTML = document.getElementById("type").value;
  
  var p=document.getElementById("type").value;
  if(p=="Platinum")
  {
    a=350;
  }
  else if(p=="Gold")
  {
    a=300;
  }
  else if(p=="Silver")
 {
   a=250;
 }
  cell5.innerHTML = a;
}