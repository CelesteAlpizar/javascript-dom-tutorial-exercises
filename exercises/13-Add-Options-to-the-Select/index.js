window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	countries.forEach(element => {
		let opcion = document.createElement("option"); //es como decirle que haga la etiqueta option
		opcion.innerHTML = element; //abre una etiqueta option por cada pais
		document.querySelector("#mySelect").appendChild(opcion); //selecciona el id y le mete lo anterior
	});

	let aler = document.querySelector("#mySelect");
	aler.addEventListener("change", function() {
		alert(aler.value);
	});
};
