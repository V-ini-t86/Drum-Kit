

// function handleClicked() {
// 	alert("I got clicked")
// }
	
for (var i = 0 ; i <= 6 ; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
	
	var buttonInnerHtml = this.innerHTML;
	document.addEventListener("keypress",buttonnn(event.key))
	
	function buttonnn(event) {
		switch (buttonInnerHtml) {
			case "w":
			var crash = new Audio('sounds/tom-1.mp3');
			crash.play();
			break;

			case "a":
			var kick = new Audio('sounds/kick-bass.mp3');
			kick.play();
			break;

			case "s":
			var snare = new Audio('sounds/snare.mp3');
			snare.play();
			break;

			case "d":
			var tom1 = new Audio('sounds/tom-1.mp3');
			tom1.play();
			break;

			case "j":
			var tom2 = new Audio('sounds/tom-2.mp3');
			tom2.play();
			break;

			case "k":
			var tom3 = new Audio('sounds/tom-3.mp3');
			tom3.play();
			break;

			default:
			case "l":
			var tom4 = new Audio('sounds/tom-4.mp3');
			tom4.play();
			break; 
		} 
	}
	buttonAnimation(buttonInnerHtml);
	});
} 

function buttonAnimation(currentkey) {
	var activeButton = document.querySelector("." + currentkey);
	activeButton.classList.add("pressed");
	setTimeout(function() {
		activeButton.classList.remove("pressed");	
	},100);
	
}



// document.addEventListener("keypress",function(event) {
// 	var button11 = event.key
// 	function makeSound(innerHTML) {
// 		switch (key) {
// 			case "w":
// 			var crash = new Audio('sounds/tom-1.mp3');
// 			crash.play();
// 			break;

// 			case "a":
// 			var kick = new Audio('sounds/kick-bass.mp3');
// 			kick.play();
// 			break;

// 			case "s":
// 			var snare = new Audio('sounds/snare.mp3');
// 			snare.play();
// 			break;

// 			case "d":
// 			var tom1 = new Audio('sounds/tom-1.mp3');
// 			tom1.play();
// 			break;

// 			case "j":
// 			var tom2 = new Audio('sounds/tom-2.mp3');
// 			tom2.play();
// 			break;

// 			case "k":
// 			var tom3 = new Audio('sounds/tom-3.mp3');
// 			tom3.play();
// 			break;

// 			default:
// 			case "l":
// 			var tom4 = new Audio('sounds/tom-4	.mp3');
// 			tom4.play();
// 			break; 
// 		} 

// 	}
// });



document.addEventListener("keypress", function(event) {
	if (event.key === "w") {
		var crash = new Audio('sounds/tom-1.mp3');
		crash.play();
	}else if (event.key === "a") {
		var kick = new Audio('sounds/kick-bass.mp3');
		kick.play();

	}else if (event.key === "s") {
		var snare = new Audio('sounds/snare.mp3');
		snare.play();
		
	}else if (event.key === "d") {
		var tom1 = new Audio('sounds/tom-1.mp3');
		tom1.play();
	}else if (event.key === "j") {
		var tom2 = new Audio('sounds/tom-2.mp3');
		tom2.play();
	}else if (event.key === "k") {
		var tom3 = new Audio('sounds/tom-3.mp3');
		tom3.play();
	}else if (event.key === "l") {
		var tom4 = new Audio('sounds/tom-4	.mp3');
		tom4.play();
	}
});

function buttonPres () {

}