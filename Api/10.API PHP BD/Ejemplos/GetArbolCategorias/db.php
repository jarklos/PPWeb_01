<?php
    
	global $mysqli;
	
	$mysqli = new mysqli('localhost:3306','root','','psikydesav02');
	
	if ($mysqli->connect_errno) {
		echo "Falló la conexión a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
		exit();
	}

	$mysqli->set_charset("utf8");
	
?>