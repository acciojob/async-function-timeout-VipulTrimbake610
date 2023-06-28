//your JS code here. If required.
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

function show(){
	let x = new Promise(function(resolve){
		setTimeout(function(){
			resolve(text.value);
		},delay.value)
	})
	return x;
}
	async function res(){
		let result = await show();
		// console.log(result);
		output.innerText = result;
	}
btn.addEventListener("click",function(e){
	
	output.innerText = "";
	res();
	
});