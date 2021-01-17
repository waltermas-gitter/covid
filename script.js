window.onload = iniciar;

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

async function cargarUrl(url){
	let response = await fetch(url);
	return response.json();
}

async function iniciar() {
	var date = new Date();
	date.setDate(date.getDate() - 1);
	date_formatted = formatDate(date);
	url = `https://api.covid19tracking.narrativa.com/api/${date_formatted}/country/argentina`
	let json = await cargarUrl(url);
	console.log(json);
	estadisticas = json.dates[`${date_formatted}`].countries.Argentina.today_new_confirmed;
	document.getElementById("casos").innerHTML = estadisticas;
	console.log(estadisticas);

}
