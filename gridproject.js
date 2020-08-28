var defaultColor=["#ff8000","#eaf4eb","#12e86b"];
var highlightBtn=document.querySelector("#highlightBtn")
var choosecolor=document.querySelectorAll(".choosecolor");
var like=document.querySelector("#like");
var dislike=document.querySelector("#dislike");

function makeRows(rows, cols) {
	box.style.setProperty('--grid-rows', rows);
	box.style.setProperty('--grid-cols', cols);
	for (c = 0; c < (rows * cols); c++) {
	  let cell = document.createElement("div");
	  box.appendChild(cell).className = "grid-item";
	}
	var gridcell=document.querySelectorAll(".grid-item");
	for(var i=0;i<gridcell.length;i++){
		var index=Math.floor(Math.random()*3);
		gridcell[i].style.backgroundColor=defaultColor[index];
	}
}


function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColors());
	}
	return arr;
}

function randomColors(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+ r + ", " + g + ", " + b + ")";
}

for(var i=0;i<3;i++){
	choosecolor[i].style.backgroundColor=defaultColor[i];
}

$("input").keypress(function(event){
	if(event.which === 13){
		var inp=$(this).val();
		makeRows(inp,inp);
	}
})

dislike.addEventListener("click",function(){
	var arrofcolor=generateRandomColors(3);
	for(var i=0;i<3;i++){
		choosecolor[i].style.backgroundColor=arrofcolor[i];
		defaultColor[i]=arrofcolor[i];
	}
})

like.addEventListener("click",function(){
	var gridcell=document.querySelectorAll(".grid-item");
	for(var i=0;i<gridcell.length;i++){
		var index=Math.floor(Math.random()*3);
		gridcell[i].style.backgroundColor=defaultColor[index];
	}
	
})

//highligth function when we clich highlight button

// highlightBtn.addEventListener("click",function(){
// 	var inpval=document.querySelector("input").value;	
// 	var arrForMaxColor=[];
// 	var n=inpval-1;
// 	var i=0;
// 	while(i!==(inpval*inpval)){
// 		var gridcell=document.querySelectorAll(".grid-item");
// 		var tempArrColor=[];
// 		var a=0;
// 		var b=0;
// 		var c=0;
// 		while(i!==n){
// 			if(gridcell[i].style.backgroundColor===defaultColor[0]){
// 				a++;
// 			}
// 			if(gridcell[i].style.backgroundColor===defaultColor[1]){
// 				b++;
// 			}
// 			if(gridcell[i].style.backgroundColor===defaultColor[2]){
// 				c++;
// 			}
// 			i++;
// 		}
// 		tempArrColor.push(a);
// 		tempArrColor.push(b);
// 		tempArrColor.push(c);
// 		var maxValue=Math.max(...tempArrColor);
// 		arrForMaxColor.push(maxValue);
// 		n=n+inpval;
// 		i++;
// 	}
// 	var finalMAxValue=Math.max(...arrForMaxColor);
// 	console.log(finalMAxValue);
// })








