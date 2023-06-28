const inputText = document.getElementById('text');
const inputDelay = document.getElementById('delay');
const btn = document.getElementById('btn');
const outputDiv = document.getElementById('output');

// Function to display the message after a delay
async function displayMessageWithDelay() {
// Get the user input values
const text = inputText.value;
const delay = parseInt(inputDelay.value);

// Wait for the specified delay
await new Promise(resolve => setTimeout(resolve, delay));

// Display the message on the webpage
outputDiv.textContent = text;
}

// Event listener for the button click
btn.addEventListener('click', () => {
displayMessageWithDelay();
});

// //your JS code here. If required.
// const text = document.getElementById("text");
// const delay = document.getElementById("delay");
// const btn = document.getElementById("btn");
// const output = document.getElementById("output");

// function show(){
// 	let x = new Promise(function(resolve){
// 		setTimeout(function(){
// 			resolve(text.value);
// 		},delay.value)
// 	})
// 	return x;
// }
// 	async function res(){
// 		let result = await show();
// 		// console.log(result);
// 		output.innerText = result;
// 	}
// btn.addEventListener("click",function(e){
	
// 	output.innerText = "";
// 	res();
	
// });