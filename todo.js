function buttonClick(str)
{
	var task = escapeHtml(document.getElementById('input').value);
	//if (task){		
		var table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
		//var btn = document.getElementById('addButton');
		
		td1=document.createElement('td');
		td2=document.createElement('td');
		tr=document.createElement('tr')
		
		tr.appendChild(td2);
		tr.appendChild(td1);

		td2.innerHTML=task;
		table.appendChild(tr);
		
		var img_correct = document.createElement("img");
		img_correct.id = "img1";
		img_correct.style.height= "5%";
		img_correct.src="http://i.piccy.info/i9/66a6a8e9cf122441da8bc10707689564/1524055703/2262/1237002/kar.png";
		td1.appendChild(img_correct);
		
		var img_delete = document.createElement("img");
		img_delete.id = "img2";
		img_delete.style.height= "1%";
		img_delete.src="http://i.piccy.info/i9/2ffefbc273e1430895dabfe183e3d316/1524056998/17353/1237002/done1.png";
		td1.appendChild(img_delete);
		img_delete.addEventListener ('click', function(){this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)});
	//}
}

function copyClick(){
	var text = document.getElementById('cb');
	text.select();
	document.execCommand('Copy');
}
	
var entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

function escapeHtml (string) {
	return String(string).replace(/[&<>"'`=\/]/g, function (s) {return entityMap[s];});
}
