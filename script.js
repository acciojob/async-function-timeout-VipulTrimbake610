//your JS code here. If required.
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

function show(){
	setTimeout(function(){
		output.innerText = text.value;
	},delay.value)
	
}
btn.addEventListener("click",function(e){
	show();
});