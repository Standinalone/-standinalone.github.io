function tableCreate(value, d) {
	if (value<20){	
		var tbl = document.getElementsByTagName("table")[0];
		var text = document.getElementsByTagName("text")[0]
		if ((tbl)&&(!text)){
			tbl.parentNode.removeChild(tbl);
			text.parentNode.removeChild(text);
		}
		
		var body = document.getElementById("fluid");
		var table = document.createElement("table");
		body.appendChild(table);
		for (j=0; j<value; j++){
			var row = table.insertRow(j);
			for (i=0; i<value; i++){
				var cell = row.insertCell(i);
				var text = document.createElement("input");
				text.style.width = "30";
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

function btnClick(){
	var txt = document.getElementsByTagName("text")[0]
	if (txt){
			txt.parentNode.removeChild(txt);
		
	}
	var body = document.getElementById("fluid");
	var text1 = document.createElement("text");
	body.appendChild(text1);
	text1.innerHTML = "<p>d<sup>m</sup><sub>ij</sub>=min{d<sup>m-1</sup><sub>i m</sub>+d<sup>m-1</sup><sub>m j</sub>, d<sup>m-1</sup><sub>ij</sub>}</p>";
	var val = document.getElementById("nodes");
	//for (counter = 1; counter <= val.value; counter++){
	for (counter = 1; counter <= 4; counter++){
		console.log(counter);
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
				var var1 = (Number(table.rows[i].cells[counter-1].getElementsByTagName("input")[0].value) + Number(table.rows[counter-1].cells[j].getElementsByTagName("input")[0].value));
				if (isNaN(var1)){
					var1 = Infinity;
				}				
				if (var1==0){
					var1 = Infinity;
				}
				var var2 = Number(table.rows[i].cells[j].getElementsByTagName("input")[0].value);
				if (isNaN(var2)){
					var2 = Infinity;
				}
				var value = ((Math.min(var1, var2)==Infinity)?"∞":Math.min(var1, var2));
			//text.innerHTML += "d<sup>" + counter + "</sup><sub>" + (i+1) + (j+1) + "</sub> = " + "min{d<sup>" + (counter-1) + "</sup><sub>" + (i+1) + " " + (counter) + "</sub>+d<sup>" + (counter-1) + "</sup><sub>" + (counter) + " " + (j+1) +" </sub>, d<sup>" + (counter-1) + "</sup><sub>" + (i+1) + " " + (j+1) + "</sub>}"+ " = min{" + table.rows[i].cells[counter-1].getElementsByTagName("input")[0].value + " + " + table.rows[counter-1].cells[j].getElementsByTagName("input")[0].value + ", " + table.rows[i].cells[j].getElementsByTagName("input")[0].value + "} = " + value + "<br>";
			text.innerHTML += "d<sup>" + counter + "</sup><sub>" + (i+1) + (j+1) + "</sub> = " +  "min{" + table.rows[i].cells[counter-1].getElementsByTagName("input")[0].value + " + " + table.rows[counter-1].cells[j].getElementsByTagName("input")[0].value + ", " + table.rows[i].cells[j].getElementsByTagName("input")[0].value + "} = " + value + "<br>";
				table2.rows[i].cells[j].getElementsByTagName("input")[0].value = value;
			}
		}
	}
	
}