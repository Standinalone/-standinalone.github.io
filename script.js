function buttonClick(str)
{
	var btn = document.createElement('button');
	btn.innerHTML = 'X';
	btn.addEventListener ('click', function(){this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)}); // 100% можно это по другому сделать.. или нет?
	
	if (str){
		var task = str;
	}
	else{
		var task = escapeHtml(document.getElementById('input').value);
	}
	var table = document.getElementById('myTable');

	td1=document.createElement('td');
	td2=document.createElement('td');
	tr=document.createElement('tr')
	
	tr.appendChild(td2);
	tr.appendChild(td1);

	td1.appendChild(btn);
	td2.innerHTML=task;
	table.appendChild(tr);
}

function copyClick(){
	var text = document.getElementById('cb').select();
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
	return string.replace(/[&<>"'`=\/]/g, function (s) {return entityMap[s];});
}
