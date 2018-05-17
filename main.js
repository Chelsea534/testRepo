var pageCounter =1
var animalContainer=document.getElementById("animal-info");;
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
	var Request = new XMLHttpRequest();
	Request.open('GET','https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json' );
	Request.onload=function(){
	if(Request.status>=200 && Request.status<400){
		var ourData=JSON.parse(Request.responseText);
		renderHTML(ourData);
	}
	else{
		console.log("Error is returned");
	}
};

Request.onerror = function(){
	console.log("Connection error");
};

Request.send();
pageCounter++;
if(pageCounter>3){
	btn.classList.add("hide-me");
}
})	;

function renderHTML(data){
var htmlString ="";
for(i=0; i<data.length; i++){
	htmlString+="<p>"+data[i].name+" is a"+data[i].species+" that likes to eat ";

	for(x=0;x<data[i].foods.likes.length; x++){
		if(x==0){
			htmlString+=data[i].foods.likes[x];
		}
		else{
			htmlString+=" and "+data[i].foods.likes[x];
		}
	}
	htmlString+=' and dislikes ';

	for(x=0;x<data[i].foods.dislikes.length; x++){
		if(x==0){
			htmlString+=data[i].foods.dislikes[x];
		}
		else{
			htmlString+=" and "+data[i].foods.dislikes[x];
		}
	}

	htmlString+='.</p>';
}

animalContainer.insertAdjacentHTML('beforeend', htmlString);	

}