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
		for (k=0; k<value; k++){
			var row = table.insertRow(k);
			for (m=0; m<value; m++){
				var cell = row.insertCell(m);
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
	
	// table.rows[0].cells[1].getElementsByTagName("input")[0].value="2 3";
	// table.rows[0].cells[2].getElementsByTagName("input")[0].value="1 1";
	// table.rows[0].cells[3].getElementsByTagName("input")[0].value="1 4";
	// table.rows[1].cells[4].getElementsByTagName("input")[0].value="1 2";
	// table.rows[2].cells[4].getElementsByTagName("input")[0].value="2 3";
	// table.rows[3].cells[5].getElementsByTagName("input")[0].value="2 2";
	// table.rows[4].cells[6].getElementsByTagName("input")[0].value="2 1";
	// table.rows[5].cells[6].getElementsByTagName("input")[0].value="2 1";
	
	// table.rows[0].cells[1].getElementsByTagName("input")[0].value="3 1";
	// table.rows[0].cells[2].getElementsByTagName("input")[0].value="7 5";
	// table.rows[1].cells[3].getElementsByTagName("input")[0].value="2 1";
	// table.rows[1].cells[4].getElementsByTagName("input")[0].value="1 1";
	// table.rows[2].cells[4].getElementsByTagName("input")[0].value="1 1";
	// table.rows[2].cells[5].getElementsByTagName("input")[0].value="2 2";
	// table.rows[2].cells[6].getElementsByTagName("input")[0].value="4 2";
	// table.rows[3].cells[7].getElementsByTagName("input")[0].value="1 1";
	// table.rows[3].cells[10].getElementsByTagName("input")[0].value="1 1";
	// table.rows[4].cells[7].getElementsByTagName("input")[0].value="1 1";
	// table.rows[4].cells[8].getElementsByTagName("input")[0].value="2 2";
	// table.rows[5].cells[9].getElementsByTagName("input")[0].value="2 2";
	// table.rows[5].cells[10].getElementsByTagName("input")[0].value="2 2";
	// table.rows[6].cells[7].getElementsByTagName("input")[0].value="1 1";
	// table.rows[6].cells[8].getElementsByTagName("input")[0].value="1 1";
	// table.rows[6].cells[9].getElementsByTagName("input")[0].value="2 2";
	// table.rows[7].cells[10].getElementsByTagName("input")[0].value="2 2";
	// table.rows[8].cells[11].getElementsByTagName("input")[0].value="3 1";
	// table.rows[9].cells[10].getElementsByTagName("input")[0].value="1 1";
	// table.rows[9].cells[11].getElementsByTagName("input")[0].value="1 1";
	// table.rows[10].cells[12].getElementsByTagName("input")[0].value="6 4";
	// table.rows[11].cells[12].getElementsByTagName("input")[0].value="5 2";
}
function btn2Click(){
		var table = document.getElementsByTagName("table")[0];
		var btn = document.getElementById("btn2");
		var img = document.createElement("IMG");
		var body = document.getElementById("fluid");
		img.src = "http://i.piccy.info/i9/0d369f60cdd89b5ebfd77c040fe31965/1527364070/44558/1247039/Capture.png";
		body.appendChild(img);
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
function bfs(r_graph, s, t, parent){
	value = r_graph.length;
	var visited = new Array(value);
	for (i=0; i<visited.length; i++){
		visited[i]=false;
	}
	
	var queue = new Array();
	queue.push(s);
	visited[s]=true;
	parent[s]=-1;
	
	while(queue.length>0){
		var u = queue.shift();
		for (v=0; v<value; v++){
			if (visited[v]==false && r_graph[u][v] > 0){
				queue.push(v);
				parent[v]=u;
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
	var paths = new Array();
	
	//Stage 1
	text.innerHTML += "<br>1)<br>";
	var vertex = new Array();
	
	for (i=0; i<value; i++){
		vertex.push({points: [], colored: false, cover: 0});
	}
	
	var edge = new Array(value);
	for (i=0; i<edge.length; i++){
		edge[i] = new Array(value);
		for (j=0; j<edge[i].length; j++){
			edge[i][j]=({capacity: 0, price: 0, flow: 0});
		}
	}
	
	for (i=0; i<value; i++){
		for (j=0; j<value; j++){
			var data = table.rows[i].cells[j].getElementsByTagName("input")[0].value;
			if (data!="-"){
				var split_data = data.split(" ");
				vertex[i].points.push(j);
				
				//edge[i][j].points = true;
				edge[i][j].capacity = split_data[0];
				edge[i][j].price = split_data[1];
				//alert(edge[i][j].price);
			}
			else
			{
				edge[i][j].capacity = 0;
			}
		}
	}
	vertex[0].colored = true;
	text.innerHTML+=("P(x<sub>1</sub>) = 0; ");
	for (i=1; i<value; i++){
		text.innerHTML += ("P(x<sub>" +(i+1)+"</sub>) = 0; ")
	}
	
	//Finding max flow for the given graph
	var r_graph = new Array(value); // Creating residual graph with capacities
	for (i=0; i<value; i++){
		r_graph[i] =new Array(value); 
	}
	for (i=0; i<vertex.length; i++){
		for (j=0; j<value; j++){
			var point2 = vertex[i].points[j];
			r_graph[i][j]=edge[i][j].capacity;
		}
	}
	var parent = new Array();
	var graph_max_flow = 0;
	while(bfs(r_graph, 0, value-1, parent)){
		var path_flow = 1000;
		for (v=(value-1); v!=0; v = parent[v]){
			u=parent[v];
			path_flow=(path_flow<r_graph[u][v])?path_flow:r_graph[u][v];
		}
		for (v=(value-1); v!=0; v = parent[v]){
			u = parent[v];
			r_graph[u][v] -= path_flow;
			r_graph[v][u] += path_flow;
		}	
		graph_max_flow += Number(path_flow);
	}
	text.innerHTML = "Максимальный поток графа: "+graph_max_flow+text.innerHTML;
	
	var I = new Array(value);
	for (i=0; i<value; i++){
		I[i] = new Array(value);
	}
	while (graph_max_flow>0){
	//for (end=0; end<1; end++){
		//Stage 2

		
		text.innerHTML += "<br>2)<br>";

		for (i=0; i<value; i++){
			for (j=0; j<vertex[i].points.length; j++){
				var point1 = i;
				var point2 = vertex[i].points[j];
				var result = vertex[point2].cover-vertex[point1].cover;
				var capacity = edge[point1][point2].capacity;
				var price = edge[point1][point2].price;
				//alert(point1+"  "+point2+" "+price);
			
				text.innerHTML += ("P(x<sub>"+(point2+1)+"</sub>) - P(x<sub>"+(point1+1)+"</sub>) = "+vertex[point2].cover+" - "+vertex[point1].cover+" = "+result);
				if (result == price){
					text.innerHTML += (" = ");
				}
				else
				{
					text.innerHTML += (" ≠ ");
				}
				text.innerHTML += ("A(x<sub>"+(point1+1)+"</sub>, x<sub>"+(point2+1)+"</sub>) = "+ price+"; ");
				text.innerHTML += ("f(x<sub>"+(point1+1)+"</sub>, x<sub>"+(point2+1)+"</sub>) = "+edge[point1][point2].flow);
				if (edge[point1][point2].flow<edge[point1][point2].capacity){
					text.innerHTML += (" < ");
				}
				else
				{
					text.innerHTML += (" = ");
				}
				text.innerHTML += ("c(x<sub>"+(point1+1)+"</sub>, x<sub>"+(point2+1)+"</sub>) = "+edge[point1][point2].capacity+" => (x<sub>"+(point1+1)+"</sub>, x<sub>"+(point2+1)+"</sub>)");
		
				if (result == price && edge[point1][point2].flow<edge[point1][point2].capacity){
					I[point1][point2]=Number(edge[point1][point2].capacity-edge[point1][point2].flow);
					text.innerHTML += (" ∈ I<br>");
				}
				else
				{
					if(edge[point1][point2].flow>0){
						text.innerHTML += (" ∈ R<br>");
					}
					else
					{
						text.innerHTML += (" ∈ N<br>");
					}
				}
			}
		}
		
		
	var visited = new Array(value);
	for (i=0; i<visited.length; i++){
		visited[i]=false;
	}
	
	var queue = new Array();
	queue.push(0);
	visited[0]=true;
	
	while(queue.length>0){
		var u = queue.shift();
		for (v=(u+1); v<value; v++){
			if (visited[v]==false && I[u][v] > 0){
				queue.push(v);
				visited[v]=true;
			}
		}
	}
	text.innerHTML += ("<br><br>Окрашенные вершины: ");
	for (i=0; i<visited.length; i++){
		vertex[i].colored=visited[i];
		
		if (visited[i]){
			text.innerHTML += "x" + "<sub>"+(i+1)+"</sub>, ";
		}
	}
	
	
		
		//Stage 3
		text.innerHTML += "<br>3)<br>";
		if (vertex[value-1].colored){
			text.innerHTML += "Найден путь: ";
			
			var r_graph = I.slice();
			var parent = new Array();
			var max_flow = 0;
			var str = "";
			var str2="";
			while(bfs(r_graph, 0, value-1, parent)){
				var path_flow = 1000;
				for (v=(value-1); v!=0; v = parent[v]){
					str=("(x<sub>"+(parent[v]+1)+"</sub>,x<sub>"+(v+1)+"</sub>)"+str);
					str2=((edge[parent[v]][v].capacity-edge[parent[v]][v].flow)+", "+str2);
					u=parent[v];
					path_flow=(path_flow<r_graph[u][v])?path_flow:r_graph[u][v];
					//alert(path_flow);
				}
				//alert(parent);
				for (v=(value-1); v!=0; v = parent[v]){
					edge[parent[v]][v].flow+=Number(path_flow);
					//edge[parent[v]][v].capacity-=Number(path_flow);
					u = parent[v];
					r_graph[u][v] -= Number(path_flow);
					r_graph[v][u] += Number(path_flow);
				}	
				max_flow += Number(path_flow);
				text.innerHTML += "<br>"+str+" min{"+str2+"}";
				str="";
				str2="";
				paths.push({parent: parent, flow: path_flow});
				parent = new Array();
			}
			text.innerHTML += ("<br>Максимальный поток = "+max_flow);
			
						
			for (i=0; i<value; i++){
				for(j=i;j<value;j++){
					if (I[i][j]){
						// vertex[i].colored=false;
						vertex[j].colored=false;
						//alert(j);
					}
				}
			 }			
			graph_max_flow-=max_flow;
		}
		else
		{
			text.innerHTML += "Вершина x<sub>"+value+"</sub> не окрашена. Путь найти не удалось";
			//Stage 4
			text.innerHTML += "<br>4)<br>";
			for (i=0; i<vertex.length; i++){
				if(!vertex[i].colored){
					vertex[i].cover++;
				}
				text.innerHTML += ("P(x<sub>"+(i+1)+"</sub>) = "+vertex[i].cover+"; ");
			}
		}
	}
	text.innerHTML += "<br><br>Найденные пути (сумма их макс. потоков равна макс. потоку графа):";
	var str="";
	var str2="";
	var price=0;
	for (i=0; i<paths.length; i++){
		for (v=(value-1); v!=0; v = paths[i].parent[v]){
			str=("(x<sub>"+(paths[i].parent[v]+1)+"</sub>,x<sub>"+(v+1)+"</sub>)"+str);
			u=paths[i].parent[v];
			str2+=(paths[i].flow+" ⋅ "+edge[u][v].price+" + ");
			price+=(edge[u][v].price*paths[i].flow);
		}
		str+=(": ",paths[i].flow);
		text.innerHTML += "<br>"+str;
		str="";
	}
	text.innerHTML += ("<br>Стоимость: "+str2+"="+price);
}