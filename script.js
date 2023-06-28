//your JS code here. If required.
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

function show(){
	let x = new Promise(function(resolve){
		setTimeout(function(){
			output.innerText = text.value;
		},delay.value)
	})
	return x;
}
btn.addEventListener("click",function(e){
	
	output.innerText = "";
	show();
	text.value = "";
	delay.value = "";
});