//this function responds with a fortune
//when click the magic 8 ball image
function shakeMagic8Ball(){
	//alert("test");
	
	//grab image by id 
	document.getElementById("magic8ball").src="magic8ballback.jpg";
	
	//grab the results
	document.getElementById("results").innerHTML="it's decidedly so!";
	
}