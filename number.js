<html>
<head>
	<title>Javascript</title>
	</head>
<body>

<p id="input"><h3><center>Guess a number</center></h3></p>
<p>The number should be from 0 to 6.</p><br> <input type="text" id="no">
<button id="check">Go</button>


<script type="text/javascript">

var y=document.getElementById("input").value;

document.getElementById("check").onclick = function()
{

var x=Math.floor(Math.random() * 6);
if(x==y)
{
alert("Well done!")
}
else
alert(x+".Try again!")


}



</script>
</body>
</html> 
