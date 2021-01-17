window.onload = iniciar;

async function cargarUrl(url){
	let response = await fetch(url);
	return response.json();
}

async function iniciar() {
	let casos = document.getElementById("casos");
	let json = await cargarUrl("https://api.covid19tracking.narrativa.com/api/2021-01-16/country/argentina");
	console.log(json);

}
