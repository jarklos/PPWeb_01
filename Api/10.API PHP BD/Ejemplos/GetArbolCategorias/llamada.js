function GetArbolCategorias(codCategoria) {

	// Recupera los bots que no son del jugador de la BD
	$.ajax({
		async:true,
		type: "GET",
		dataType: "html",
		url:"GetArbolCategorias.php?cod_categoria=" + codCategoria,
		success:actualizaExito,
		error:problemas				
	});	
		
	function actualizaExito(datos){
		
		console.log(datos);
		
	}	
	
	function problemas(){
		console.log("error");
	}
}


GetArbolCategorias(0);