<?php
    
	global $enlace;
	
	$enlace = mysqli_connect('localhost:3306','root','','videos_test');
	if(!$enlace){
		echo "Error";
		exit;
	}
	
?>