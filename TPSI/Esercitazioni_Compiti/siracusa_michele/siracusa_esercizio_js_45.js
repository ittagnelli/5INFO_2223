function submitForm() {
	// Creo l'oggetto User
	var user = {};
	user.nome = document.getElementById("nome").value;
	user.cognome = document.getElementById("cognome").value;
	user.eta = document.getElementById("eta").value;
	user.coloreCapelli = document.getElementById("coloreCapelli").value;
	
	// Definizione del metodo descrivi
	user.descrivi = function() {
		console.log("Ciao, io sono l'utente " + this.nome + " " + this.cognome + " di anni " + this.eta + " e con i capelli color " + this.coloreCapelli + ".");
	};
	
	// Chiamata al metodo descrivi
	user.descrivi();
	
	// Rimozione delle proprieta eta e coloreCapelli
	delete user.eta;
	delete user.coloreCapelli;
	
	// Aggiunta delle proprieta rimanenti alla pagina HTML
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = "";
	for (var prop in user) {
		if (user.hasOwnProperty(prop)) {
			var p = document.createElement("p");
			p.innerText = prop + ": " + user[prop];
			outputDiv.appendChild(p);
		}
	}
}
