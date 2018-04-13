function min(){}
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
			var table = document.getElementsByTagName("table")[0];

	table.rows[0].cells[1].getElementsByTagName("input")[0].value = 4;
	table.rows[0].cells[2].getElementsByTagName("input")[0].value = 2;
	table.rows[0].cells[3].getElementsByTagName("input")[0].value = 5;
	
	table.rows[1].cells[4].getElementsByTagName("input")[0].value = 2;
	table.rows[1].cells[5].getElementsByTagName("input")[0].value = 2;
	
	table.rows[2].cells[5].getElementsByTagName("input")[0].value = 1;
	table.rows[2].cells[6].getElementsByTagName("input")[0].value = 2;
	
	table.rows[3].cells[5].getElementsByTagName("input")[0].value = 1;
	table.rows[3].cells[6].getElementsByTagName("input")[0].value = 1;
	table.rows[3].cells[7].getElementsByTagName("input")[0].value = 2;
	
	table.rows[4].cells[8].getElementsByTagName("input")[0].value = 2;
	table.rows[4].cells[10].getElementsByTagName("input")[0].value = 2;
	
	table.rows[5].cells[9].getElementsByTagName("input")[0].value = 2;
	table.rows[5].cells[10].getElementsByTagName("input")[0].value = 2;
	
	table.rows[6].cells[8].getElementsByTagName("input")[0].value = 1;
	table.rows[6].cells[9].getElementsByTagName("input")[0].value = 1;
	
	table.rows[7].cells[9].getElementsByTagName("input")[0].value = 3;
	table.rows[7].cells[12].getElementsByTagName("input")[0].value = 2;
	
	table.rows[8].cells[11].getElementsByTagName("input")[0].value = 2;
	
	table.rows[9].cells[10].getElementsByTagName("input")[0].value = 1;
	table.rows[9].cells[11].getElementsByTagName("input")[0].value = 1;
	table.rows[9].cells[12].getElementsByTagName("input")[0].value = 1;
	
	table.rows[10].cells[13].getElementsByTagName("input")[0].value = 5;
	
	table.rows[11].cells[13].getElementsByTagName("input")[0].value = 2;
	
	table.rows[12].cells[13].getElementsByTagName("input")[0].value = 3;
	}
}

function btnClick(){
	var txt = document.getElementsByTagName("text")[0]
	if (txt){
			txt.parentNode.removeChild(txt);
		
	}
	var body = document.getElementsByTagName("body")[0];
	var text1 = document.createElement("text");
	body.appendChild(text1);
	text1.innerHTML = "<p>d<sup>m</sup><sub>ij</sub>=min{d<sup>m-1</sup><sub>i m</sub>+d<sup>m-1</sup><sub>m j</sub>, d<sup>m-1</sup><sub>ij</sub>}</p>";
	var val = document.getElementById("nodes");
	for (counter = 1; counter <= val.value; counter++){
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
			text.innerHTML += "d<sup>" + counter + "</sup><sub>" + (i+1) + (j+1) + "</sub> = " + "min{d<sup>" + (counter-1) + "</sup><sub>" + (i+1) + " " + (counter-1) + "</sub>+d<sup>" + (counter-1) + "</sup><sub>" + (counter-1) + " " + (j+1) +" </sub>, d<sup>" + (counter) + "</sup><sub>" + (i+1) + " " + (j+1) + "</sub>}"+ " = min{" + table.rows[i].cells[counter-1].getElementsByTagName("input")[0].value + " + " + table.rows[counter-1].cells[j].getElementsByTagName("input")[0].value + ", " + table.rows[i].cells[j].getElementsByTagName("input")[0].value + "} = " + value + "<br>";
				table2.rows[i].cells[j].getElementsByTagName("input")[0].value = value;
			}
		}
	}
	
}

function btn2Click(){
	var txt = document.getElementsByTagName("text")[0]
	if (txt){
			txt.parentNode.removeChild(txt);
		
	}
	var body = document.getElementsByTagName("body")[0];
	var text1 = document.createElement("text");
	body.appendChild(text1);
	//text1.innerHTML = "d<sub>m</sub><sup>mj</sup>=min<sup>1,2,...m-1</sup>(d<sub>0</sub>";
	var img = document.createElement("IMG");
	img.src = "http://i.piccy.info/i9/68af74241b6da6aa5e3c1370a0c13ef3/1523632720/10324/1237002/2.png";
	body.appendChild(img);
	var val = document.getElementById("nodes");
	
	var text1 = document.createElement("text");
	body.appendChild(text1);
	text1.innerHTML += "<br><b>Матрица D1</b><br>";
	tableCreate(1); //Matrix D0
	var table0 = document.getElementsByTagName("table")[0];
	for (counter = 2; counter <= val.value; counter++){
	//for (counter = 2; counter <= 13; counter++){
		var m = counter-1;
		var table1 = document.getElementsByTagName("table")[counter-1];
		//var length = table.rows.length;	
		var text1 = document.createElement("text");
		body.appendChild(text1);
		text1.innerHTML += "<b>Матрица D" + counter + "</b><br>"	;
		tableCreate(counter);
		var table2 = document.getElementsByTagName("table")[counter];
		var text2 = document.createElement("text");
		body.appendChild(text2);
	
		for(i=0; i<=m-1; i++){ //Dim
			var min=Infinity;
			var string1 ="";
			var string2 = "" ;
			text2.innerHTML += "d<sup>" + (m+1) + "</sup><sub>" + (i+1) + " " + (m+1) + "</sub> = min{";
			for (j=0; j <= m-1; j++){
				var table1_ij = (table1.rows[i].cells[j].getElementsByTagName("input")[0].value);
				var table0_jm = (table0.rows[j].cells[m].getElementsByTagName("input")[0].value);
				
				if (Number(table1_ij)+Number(table0_jm)<min){
					min = Number(table1_ij)+Number(table0_jm);
				}
				string1 += "d<sup>" + (m) + "</sup><sub>" + (i+1) + " " + (j+1) + "</sub> + d<sup>0</sup><sub>" + (j+1) + " " + (m+1) + "</sub>";
				string2 += table1_ij + " + " + table0_jm;
				if(m-1>j){
					string1 += "; ";
					string2 += "; ";
				}
			}
			var value = (min==Infinity)?"∞":min;
			text2.innerHTML += string1 + "} = min{" + string2 + "} = " + value + "<br>";
			table2.rows[i].cells[m].getElementsByTagName("input")[0].value = value;
		}
		
		// text2.innerHTML += "<br>";
		
		// for(j=0; j<=m-1; j++){ //Dmj
			// var min=Infinity;
			// var string1 = "";
			// var string2 = "" ;
			// text2.innerHTML += "d<sup>" + (m+1) + "</sup><sub>" + (m+1) + " " + (j+1) + "</sub> = min{";
			// for (i=0; i <= m-1; i++){
				// var table1_ij = table1.rows[i].cells[j].getElementsByTagName("input")[0].value;
				// var table0_mi = table0.rows[m].cells[i].getElementsByTagName("input")[0].value;
				
				// if (table1_ij+table0_mi<min){
					// min = Number(table1_ij+table0_mi);
				// }
				// string1 += "d<sup>0</sup><sub>" + (m+1) + " " + (i+1) + "</sub> + d<sup>" + (m) + "</sup><sub>" + (i+1) + " " + (j+1) + "</sub>";
				// string2 += table0_mi + " + " + table1_ij;
				// if(m-1>i){
					// string1 += "; ";
					// string2 += "; ";
				// }
			// }
			// var value = (min==Infinity)?"∞":min;
			// text2.innerHTML += string1 + "} = {" + string2 + "} = " + value + "<br>";
			// table2.rows[m].cells[j].getElementsByTagName("input")[0].value = value;
		// }
		
		text2.innerHTML += "<br>";
		
		//Dij
		var min=Infinity;
		for (i=0; i<=m-1; i++){
			for (j=0; j<=m-1; j++){
				if (j==i){
					var value = 0;
				}
				else
				{
					var table2_im = table2.rows[i].cells[m].getElementsByTagName("input")[0].value;
					var table2_mj = table0.rows[m].cells[j].getElementsByTagName("input")[0].value;
					var table1_ij = table1.rows[i].cells[j].getElementsByTagName("input")[0].value;
					
					var var1 = Number(table2_im + table2_mj);
					if (isNaN(var1)){
						var1 = Infinity;
					}		
					var var2 = Number(table1_ij);
					if (isNaN(var2)){
						var2 = Infinity;
					}				
					var value = Math.min(var1,var2)==Infinity?"∞":Math.min(var1,var2);
					text2.innerHTML += "d<sup>" + (m+1) + "</sup><sub>" + (i+1) + " " + (j+1) + "</sub> = min{d<sup>" + (m+1) + "</sup><sub>" + (i+1) + " " + (m+1) + "</sub> + " + "d<sup>" + (m+1) + "</sup><sub>" + (m+1) + " " + (j+1) + "</sub>; " + "d<sup>" + (m) + "</sup><sub>" + (i+1) + " " + (j+1) + "</sub>} = min{" + table2_im + " + " + table2_mj + "; " + table1_ij + "} = " + value + "<br>";
				}
				table2.rows[i].cells[j].getElementsByTagName("input")[0].value = value;
			}
		}
	}
}
