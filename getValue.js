var patient = new Array();
function addRow () {
	var doc = document.getElementById("doctor");
	var tbl;
	if (doc.value == 'Gvidas Januškevičius'){
	tbl = document.getElementById("patients0");
		}
	else if (doc.value == 'Karolina Kniežienė'){
	tbl = document.getElementById("patients1");
		}
	else if (doc.value == 'Jonas Petraitis'){
	tbl = document.getElementById("patients2");
		}

	else if (doc.value == 'Agnė Pociutė'){
	tbl = document.getElementById("patients3");
		}
	else if (doc.value == 'Judita Savickienė'){
	tbl = document.getElementById("patients4");
		}

	else if (doc.value == 'Andrius Vaišvila'){
	tbl = document.getElementById("patients5");
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
	cell5.innerHTML = document.getElementById("been_to_italy").value;
	document.forms["anketa"].reset();
	}
	else
		alert('Visi laukeliai turi būti užpildyti!');
}