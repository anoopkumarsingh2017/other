

function add(){
		var a = document.getElementById("a").value;
		var b = document.getElementById("b").value;
		if(a == "" || b == ""){
			alert("wrong value!");
			return false;
		}
		var c = parseInt(a) + parseInt(b);
		document.getElementById("c").value = c;
		
	}