function tableCreate(value) {
	if (value<20){
		
		var tbl = document.getElementsByTagName("table")[0];
		var text = document.getElementsByTagName("text")[0]
		if ((tbl)&&(!text)){
			tbl.parentNode.removeChild(tbl);
			text.parentNode.removeChild(text);
		}
		
		var body = document.getElementsByTagName("body")[0];
		var table = document.createElement("table");
		
		body.appendChild(table);
		for (j=0; j<value; j++){
			var row = table.insertRow(j);
			for (i=0; i<value; i++){
				var cell = row.insertCell(i);
				var text = document.createElement("input");
				text.size = "1";
				text.value = "∞";
				text.style.border = "none";
				cell.appendChild(text);
			}
		}
		for (i=0; i<value; i++){
			table.rows[i].cells[i].getElementsByTagName("input")[0].value = 0;
		}
	}
}
function min(value1, value2){
	
}
function btnClick(){
	var txt = document.getElementsByTagName("text")[0]
	if (txt){
			txt.parentNode.removeChild(txt);
		
	}
	var body = document.getElementsByTagName("body")[0];
	var text1 = document.createElement("text");
	body.appendChild(text1);
	text1.innerHTML = "<p>d<sup>m</sup><sub>ij</sub>=min{d<sup>m-1</sup><sub>i1</sub>+d<sup>m-1</sup><sub>1j</sub>, d<sup>m-1</sup><sub>ij</sub>}</p>";
	for (counter = 1; counter < 4; counter++){
		var table = document.getElementsByTagName("table")[counter-1];
		var length = table.rows.length;	
		var text1 = document.createElement("text");
		body.appendChild(text1);
		text1.innerHTML += "<b>Матрица D" + counter + "</b><br>"	;
		tableCreate(length);
		var table2 = document.getElementsByTagName("table")[counter];
		var text = document.createElement("text");
		body.appendChild(text);
		for (i=0; i<length; i++){
			for (j=0; j<length; j++){
				//var elem = table.rows[i-1].cells[1-1].getElementsByTagName("input")[0].innerHTML;
				var var1 = (Number(table.rows[i].cells[0].getElementsByTagName("input")[0].value) + Number(table.rows[0].cells[j].getElementsByTagName("input")[0].value));
				if (isNaN(var1)){
					var1 = Infinity;
				}
				var var2 = Number(table.rows[i].cells[j].getElementsByTagName("input")[0].value);
				if (isNaN(var2)){
					var2 = Infinity;
				}
				var value = ((Math.min(var1, var2)==Infinity)?"∞":Math.min(var1, var2));
				text.innerHTML += "d<sup>" + counter + "</sup><sub>" + (i+1) + (j+1) + "</sub> = min{" + table.rows[i].cells[0].getElementsByTagName("input")[0].value + " + " + table.rows[0].cells[j].getElementsByTagName("input")[0].value + ", " + table.rows[i].cells[j].getElementsByTagName("input")[0].value + "} = " + value + "<br>";
				table2.rows[i].cells[j].getElementsByTagName("input")[0].value = value;
			}
		}
	}
	
}