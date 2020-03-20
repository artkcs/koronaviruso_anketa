
document.getElementById("empty0").innerHTML = "Kol kas pacientų neįregistruota";
document.getElementById("empty1").innerHTML = "Kol kas pacientų neįregistruota";
document.getElementById("empty2").innerHTML = "Kol kas pacientų neįregistruota";
document.getElementById("empty3").innerHTML = "Kol kas pacientų neįregistruota";
document.getElementById("empty4").innerHTML = "Kol kas pacientų neįregistruota";
document.getElementById("empty5").innerHTML = "Kol kas pacientų neįregistruota";
/*Funkcija nustato, kokiam gydytojui priskirtas pacientas ir į to gydytojo lentelę įrašo jo duomenis
sukurdama naują eilutę*/
function addRow () {
	var tbl;
	var doc = document.getElementById("doctor");
	if (doc.value == 'Gvidas Januškevičius'){
	tbl = document.getElementById("patients0");
	document.getElementById("empty0").innerHTML = "";

		}
	else if (doc.value == 'Karolina Kniežienė'){
	tbl = document.getElementById("patients1");
	document.getElementById("empty1").innerHTML = "";
		}
	else if (doc.value == 'Jonas Petraitis'){
	tbl = document.getElementById("patients2");
	document.getElementById("empty2").innerHTML = "";
		}

	else if (doc.value == 'Agnė Pociutė'){
	tbl = document.getElementById("patients3");
	document.getElementById("empty3").innerHTML = "";
		}
	else if (doc.value == 'Judita Savickienė'){
	tbl = document.getElementById("patients4");
	document.getElementById("empty4").innerHTML = "";
		}

	else if (doc.value == 'Andrius Vaišvila'){
	tbl = document.getElementById("patients5");
	document.getElementById("empty5").innerHTML = "";
		}
	if(document.getElementById("name").value != "" &&
		document.getElementById("lastname").value != "" &&
		document.getElementById("tel").value != "" &&
		document.getElementById("email").value != "" &&
		document.getElementById("doctor").value != "") {
	var row = tbl.insertRow();
	var cell1 = row.insertCell();
	var cell2 = row.insertCell();
	var cell3 = row.insertCell();
	var cell4 = row.insertCell();
	var cell5 = row.insertCell();
	cell1.innerHTML = document.getElementById("name").value;
	cell2.innerHTML = document.getElementById("lastname").value;
	cell3.innerHTML = document.getElementById("tel").value;
	cell4.innerHTML = document.getElementById("email").value;
	if(document.getElementById("been_to_italy_y").checked == true)
		cell5.innerHTML = document.getElementById("been_to_italy_y").value;
	else cell5.innerHTML = document.getElementById("been_to_italy_n").value;
	document.forms["anketa"].reset();
	}
	else
		alert('Visi laukeliai turi būti užpildyti!');
}