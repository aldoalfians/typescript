const buttonHandler = document.querySelector("button")!;

function clickHandler(message: string) {
	// let userName = "Aldo";
	console.log("clicked" + message);
}

if (buttonHandler) {
	buttonHandler?.addEventListener("click", clickHandler.bind(null));
}
