<?php
	header ("Access-Control-Allow-Origin:*");
	header ("Access-Control-Allow-Methods:POST,GET,OPTIONS");
	header ("Content-Type:application/json");
	
	include_once('../conexion/db.php');
	
	$uss = $_GET["uss"];
	$pss = $_GET["pss"];
	
	function login($uss,$pss){
		global $enlace;
		
		$resultado =  mysqli_query($enlace,"SELECT * FROM usuarios WHERE uss ='".$uss."' AND pss= '".$pss."'");
		
		while ($user = mysqli_fetch_array($resultado)){
			$todosLosUser[] = $user;
		}
		
		return $todosLosUser;
		
		
	}
	
	if($_SERVER['REQUEST_METHOD']==='GET'){
	
		$resultados = login($_GET["uss"],$_GET["pss"]);
		
	}
	else{
		header('HTTP/1.1 405 Method Not Allowed');
		exit;
		
	}
	
	echo json_encode($resultados);

?>