function tableCreate(value, d) {
	if (value<20){	
		var table = document.getElementsByTagName("table")[0];
		var text = document.getElementsByTagName("text")[0];
		if (table){
			table.parentNode.removeChild(table);
		}
		var body = document.getElementById("fluid");
		var table = document.createElement("table");
		table.classList.add("table-responsive-sm");
		body.appendChild(table);
		for (j=0; j<value; j++){
			var row = table.insertRow(j);
			for (i=0; i<value; i++){
				var cell = row.insertCell(i);
				var text = document.createElement("input");
				text.style.width = "30";
				text.value = "-";
				text.style.border = "none";
				var temp;
				text.onfocus = function(){temp = this.value; this.value="";};
				text.onfocusout = function(){
					if (this.value==("")) this.value = temp;
				}
				cell.appendChild(text);
			}
		}
	}
	// table.rows[0].cells[1].getElementsByTagName("input")[0].value="1 1";
	// table.rows[1].cells[3].getElementsByTagName("input")[0].value="1 1";
	// table.rows[3].cells[4].getElementsByTagName("input")[0].value="3 3";
	// table.rows[0].cells[2].getElementsByTagName("input")[0].value="1 1";
	// table.rows[2].cells[3].getElementsByTagName("input")[0].value="2 1";
	

	
	// table.rows[0].cells[1].getElementsByTagName("input")[0].value="1 3";
	// table.rows[0].cells[2].getElementsByTagName("input")[0].value="1 2";
	// table.rows[0].cells[3].getElementsByTagName("input")[0].value="1 1";
	// table.rows[1].cells[2].getElementsByTagName("input")[0].value="1 2";
	// table.rows[1].cells[6].getElementsByTagName("input")[0].value="1 5";
	// table.rows[2].cells[3].getElementsByTagName("input")[0].value="1 2";
	// table.rows[2].cells[5].getElementsByTagName("input")[0].value="1 5";
	// table.rows[3].cells[4].getElementsByTagName("input")[0].value="1 4";
	// table.rows[4].cells[5].getElementsByTagName("input")[0].value="1 1";
	// table.rows[5].cells[7].getElementsByTagName("input")[0].value="1 2";
	// table.rows[6].cells[7].getElementsByTagName("input")[0].value="1 4";
	
	// table.rows[0].cells[1].getElementsByTagName("input")[0].value="3 3";
	// table.rows[0].cells[2].getElementsByTagName("input")[0].value="3 1";
	// table.rows[0].cells[3].getElementsByTagName("input")[0].value="3 2";
	// table.rows[0].cells[4].getElementsByTagName("input")[0].value="5 2";
	// table.rows[1].cells[5].getElementsByTagName("input")[0].value="3 1";
	// table.rows[1].cells[7].getElementsByTagName("input")[0].value="2 2";
	// table.rows[2].cells[5].getElementsByTagName("input")[0].value="3 3";
	// table.rows[2].cells[6].getElementsByTagName("input")[0].value="2 1";
	// table.rows[3].cells[5].getElementsByTagName("input")[0].value="1 1";
	// table.rows[3].cells[7].getElementsByTagName("input")[0].value="2 1";
	// table.rows[4].cells[6].getElementsByTagName("input")[0].value="2 2";
	// table.rows[4].cells[7].getElementsByTagName("input")[0].value="2 2";
	// table.rows[5].cells[8].getElementsByTagName("input")[0].value="5 1";
	// table.rows[5].cells[9].getElementsByTagName("input")[0].value="2 1";
	// table.rows[6].cells[8].getElementsByTagName("input")[0].value="1 1";
	// table.rows[6].cells[10].getElementsByTagName("input")[0].value="1 1";
	// table.rows[6].cells[11].getElementsByTagName("input")[0].value="2 2";
	// table.rows[7].cells[9].getElementsByTagName("input")[0].value="2 2";
	// table.rows[7].cells[10].getElementsByTagName("input")[0].value="1 1";
	// table.rows[7].cells[11].getElementsByTagName("input")[0].value="2 2";
	// table.rows[8].cells[12].getElementsByTagName("input")[0].value="6 2";
	// table.rows[9].cells[12].getElementsByTagName("input")[0].value="3 3";
	// table.rows[10].cells[12].getElementsByTagName("input")[0].value="3 1";
	// table.rows[11].cells[12].getElementsByTagName("input")[0].value="2 2";
}
function btn2Click(){
		var table = document.getElementsByTagName("table")[0];
		var btn = document.getElementById("btn2");
		table.rows[0].cells[1].getElementsByTagName("input")[0].value="4 2";
		table.rows[0].cells[2].getElementsByTagName("input")[0].value="3 2";
		table.rows[0].cells[3].getElementsByTagName("input")[0].value="3 2";
		table.rows[0].cells[4].getElementsByTagName("input")[0].value="5 4";
		table.rows[1].cells[5].getElementsByTagName("input")[0].value="2 2";
		table.rows[1].cells[6].getElementsByTagName("input")[0].value="2 2";
		table.rows[2].cells[5].getElementsByTagName("input")[0].value="1 1";
		table.rows[2].cells[6].getElementsByTagName("input")[0].value="1 1";
		table.rows[2].cells[7].getElementsByTagName("input")[0].value="2 1";
		table.rows[3].cells[6].getElementsByTagName("input")[0].value="1 1";
		table.rows[3].cells[11].getElementsByTagName("input")[0].value="2 2";
		table.rows[4].cells[7].getElementsByTagName("input")[0].value="2 1";
		table.rows[4].cells[8].getElementsByTagName("input")[0].value="3 3";
		table.rows[5].cells[9].getElementsByTagName("input")[0].value="1 1";
		table.rows[5].cells[10].getElementsByTagName("input")[0].value="2 1";
		table.rows[6].cells[10].getElementsByTagName("input")[0].value="1 1";
		table.rows[6].cells[11].getElementsByTagName("input")[0].value="3 3";
		table.rows[7].cells[9].getElementsByTagName("input")[0].value="3 2";
		table.rows[8].cells[10].getElementsByTagName("input")[0].value="3 3";
		table.rows[8].cells[11].getElementsByTagName("input")[0].value="3 3";
		table.rows[9].cells[12].getElementsByTagName("input")[0].value="5 3";
		table.rows[10].cells[12].getElementsByTagName("input")[0].value="6 2";
		table.rows[11].cells[12].getElementsByTagName("input")[0].value="5 5";

}
function bfs(r_graph, s, t, path){
	value = r_graph.length;
	var visited = new Array(value);
	for (i=0; i<visited.length; i++){
		visited[i]=false;
	}
	var queue = new Array();
	queue.push(s);
	visited[s]=true;
	path[s]=-1;
	
	while(queue.length>0){
		var u = queue[0];
		queue.shift();
		for (v=0; v<value; v++){
			if (visited[v]==false && r_graph[u][v] >0){
				queue.push(v);
				path[v]=u;
				visited[v]=true;
			}
		}
	}
	return (visited[t]==true);
}

function btnClick(){
	var value = Number(document.getElementsByTagName("input")[0].value); //Amount of points
	var table = document.getElementsByTagName("table")[0]; //Table with capacities and prices
	var text = document.createElement("text");
	var body = document.getElementById("fluid");
	body.appendChild(text);
	

	
	//Stage 1
	text.innerHTML += "<br>1)<br>";
	var array = new Array();
	
	for (i=0; i<value; i++){
		array.push({points: [], capacities: [], prices: [], flow: [], colored: false, cover: 0});
	}
	
	var array2 = new Array(value);
	for (i=0; i<array2.length; i++){
		array2[i] = new Array(value);
		for (j=0; j<array2[i].length; j++){
			array2[i][j]=({points: false, capacity: 0, price: 0, flow: 0});
		}
	}
	
	for (i=0; i<value; i++){
		for (j=0; j<value; j++){
			var data = table.rows[i].cells[j].getElementsByTagName("input")[0].value;
			if (data!="-"){
				var split_data = data.split(" ");
				array[i].points.push(j);
				array[i].capacities.push(split_data[0]);
				array[i].prices.push(split_data[1]);
				array[i].flow.push(0);
				
				array2[i][j].points = true;
				array2[i][j].capacity = split_data[0];
				array2[i][j].price = split_data[1];
			}
		}
		//alert(array[i].points);
	}
	array[0].colored = true;
	text.innerHTML+=("P(x<sub>1</sub>) = 0; ");
	for (i=1; i<value; i++){
		text.innerHTML += ("P(x<sub>" +(i+1)+"</sub>) = 0; ")
	}
	
	
	
	//Finding max flow for the given graph
	var r_graph = new Array(value);
	for (i=0; i<value; i++){
		r_graph[i] = new Array(value);
	}
	for (i=0; i<array.length; i++){
		for (j=0; j<array[i].points.length; j++){
			var capacity = array[i].capacities[j];
			var point1 = i;
			var point2 = array[i].points[j];
			r_graph[point1][point2]=capacity;
		}
	}
	var path = new Array();
	var graph_max_flow = 0;
	while(bfs(r_graph, 0, value-1, path)){
		var path_flow = 1000;
		for (v=(value-1); v!=0; v = path[v]){
			u=path[v];
			path_flow=(path_flow<r_graph[u][v])?path_flow:r_graph[u][v];
		}
		for (v=(value-1); v!=0; v = path[v]){
			u = path[v];
			r_graph[u][v] -= path_flow;
			//r_graph[v][u] += path_flow;
		}	
		graph_max_flow += Number(path_flow);
	}
	text.innerHTML = "Максимальный поток графа: "+graph_max_flow+text.innerHTML;
	
	
	
	
	var end=false;
	//var end=0;
	//while (graph_max_flow>5){
	while (!end){
		//end++;
		//Stage 2
		for (i=1; i<value; i++){
			array[i].colored = false;
		}
		text.innerHTML += "<br>2)<br>";
		var I = new Array(value);
		for (i=0; i<value; i++){
			I[i] = new Array(value);
		}
		for (i=0; i<I.length; i++){
			I[i] = new Array();
		}
		for (i=0; i<array.length; i++){
			for (j=0; j<array[i].points.length; j++){
				var point1 = i;
				var point2 = array[i].points[j];
				var result = array[point2].cover-array[point1].cover;
				var capacity = array[i].capacities[j];
				var price = array[i].prices[j];
			
				text.innerHTML += ("P(x<sub>"+(point2+1)+"</sub>) - P(x<sub>"+(point1+1)+"</sub>) = "+array[point2].cover+" - "+array[point1].cover+" = "+(array[point2].cover-array[point1].cover));
				if (result == price){
					text.innerHTML += (" = ");
				}
				else
				{
					text.innerHTML += (" ≠ ");
				}
				text.innerHTML += ("A(x<sub>"+(point1+1)+"</sub>, x<sub>"+(point2+1)+"</sub>) = "+ price+"; ");
				text.innerHTML += ("f(x<sub>"+(point1+1)+"</sub>, x<sub>"+(point2+1)+"</sub>) = "+array2[point1][point2].flow);
				if (array2[point1][point2].flow<array2[point1][point2].capacity){
					text.innerHTML += (" < ");
				}
				else
				{
					text.innerHTML += (" = ");
				}
				text.innerHTML += ("c(x<sub>"+(point1+1)+"</sub>, x<sub>"+(point2+1)+"</sub>) = "+array2[point1][point2].capacity+" => (x<sub>"+(point1+1)+"</sub>, x<sub>"+(point2+1)+"</sub>)");
				if (result == price && array2[point1][point2].flow<array2[point1][point2].capacity && array[point1].colored){
					I[point1][point2]=capacity;
					array[point2].colored=true;
					text.innerHTML += (" ∈ I<br>");
				}
				else
				{
					if(array2[point1][point2].flow==array2[point1][point2].capacity){
						text.innerHTML += (" ∈ R<br>");
						array[point2].colored=false;
					}
					else
					{
						text.innerHTML += (" ∈ N<br>");
					}
				}
			}
		}
		
		//Stage 3
		text.innerHTML += "<br>3)<br>";
		if (array[value-1].colored){
			text.innerHTML += "Найден путь: ";
			
			for (i=0; i<I.length; i++){
				for (j=0; j<I[0].length; j++){
					I[i][j] = array2[i][j].capacity-array2[i][j].flow;
				}	
			}
			var r_graph = I.slice();
			var path = new Array();
			var max_flow = 0;
			var str = "";
			
			while(bfs(r_graph, 0, value-1, path)){
				var path_flow = 1000;
				for (v=(value-1); v!=0; v = path[v]){
					str=("(x<sub>"+(path[v]+1)+"</sub>,x<sub>"+(v+1)+"</sub>)"+str);
					u=path[v];
					path_flow=(path_flow<r_graph[u][v])?path_flow:r_graph[u][v];
					//alert(path_flow);
				}
				for (v=(value-1); v!=0; v = path[v]){
					array2[path[v]][v].flow+=Number(path_flow);
					u = path[v];
					r_graph[u][v] -= path_flow;
					//r_graph[v][u] += path_flow;
				}	
				max_flow += Number(path_flow);
				text.innerHTML += "<br>"+str;
				str="";
			}
			text.innerHTML += ("<br>Максимальный поток = "+max_flow);
			graph_max_flow-=max_flow;
			if (graph_max_flow==0) end=true;
			//lert(max_flow);
			text.innerHTML += ("<br><br>пока что все :(");
			end++;
		}
		else
		{
			text.innerHTML += "Вершина x<sub>"+value+"</sub> не окрашена. Путь найти не удалось";
			//Stage 4
			text.innerHTML += "<br>4)<br>";
			for (i=0; i<array.length; i++){
				if(!array[i].colored){
					array[i].cover++;
				}
				text.innerHTML += ("P(x<sub>"+(i+1)+"</sub>) = "+array[i].cover+"; ");
			}
		}
	}
	
}