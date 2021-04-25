function validate(event)
{
  var a=0;
  var text1 = document.getElementById("phone").value;
  var checknum = /^[6-9][0-9]{9}$/;

  if(checknum.test(text1))
  {
    document.getElementById("pn").innerHTML="Valid";
    document.getElementById("pn").style.visibility="hidden";
    document.getElementById("pn").style.color="green";
    a+=1;
  }

  else
  {
    document.getElementById("pn").innerHTML="Invalid";
    document.getElementById("pn").style.visibility="visible";
    document.getElementById("pn").style.color="red";
  }

  var text2 = document.getElementById("register").value;
  var checkreg = /^[a-z0-9]+$/i;

  if(checkreg.test(text2))
  {
    document.getElementById("rn").innerHTML="Valid";
    document.getElementById("rn").style.visibility="hidden";
    document.getElementById("rn").style.color="green";
    a+=1;
  }

  else
  {
    document.getElementById("rn").innerHTML="Invalid";
    document.getElementById("rn").style.visibility="visible";
    document.getElementById("rn").style.color="red";
  }

  var text3 = document.getElementById("name").value;
  var checkname = /^[\sa-zA-Z]{0,30}$/;

  if(checkname.test(text3))
  {
    document.getElementById("nm").innerHTML="Valid";
    document.getElementById("nm").style.visibility="hidden";
    document.getElementById("nm").style.color="green";
    a+=1;
  }

  else
  {
    document.getElementById("nm").innerHTML="Invalid";
    document.getElementById("nm").style.visibility="visible";
    document.getElementById("nm").style.color="red";
  }

  var text4 = document.getElementById("email").value;
  var checkemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(checkemail.test(text4))
  {
    document.getElementById("em").innerHTML="Valid";
    document.getElementById("em").style.visibility="hidden";
    document.getElementById("em").style.color="green";
    a+=1;
  }

  else
  {
    document.getElementById("em").innerHTML="Invalid";
    document.getElementById("em").style.visibility="visible";
    document.getElementById("em").style.color="red";
  }
  console.log(a);

  var x = document.getElementById("snackbar");
    if(a==4){
  x.className = "show";
}

setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
var text5 = document.getElementById("dob").value;
var text6 = document.getElementById("prog").value;
console.log(text3);
console.log(text2);
console.log(text5);
console.log(text6);
console.log(text4);
console.log(text1);

  
}
  

