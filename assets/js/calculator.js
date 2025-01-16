// JavaScript Document
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var calcFunc = document.getElementById('calcFunc');
var results = document.getElementById('results');

function calculate(){
	// MULTIPLY
	if (calcFunc.value=="multiply") {
		results.innerHTML='<h3>Result is: '+ (num1.value * num2.value) +'<h3>';
	}
	
	// ADD
	if (calcFunc.value=="add") {
		results.innerHTML='<h3>Result is: '+ (parseInt(num1.value) + parseInt(num2.value)) +'<h3>';
	}
	
	// SUBTRACT
	if (calcFunc.value=="subtract") {
		results.innerHTML='<h3>Result is: '+ (num1.value - num2.value) +'<h3>';
	}
	
	// DIVIDE
	if (calcFunc.value=="divide") {
		results.innerHTML='<h3>Result is: '+ (num1.value / num2.value) +'<h3>';
	}
}

var calcExecButton = document.getElementById('calcExec');
calcExecButton.addEventListener('click', calculate, false);