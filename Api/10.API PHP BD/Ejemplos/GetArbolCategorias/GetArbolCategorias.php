<?php

	/* Usa una conexion global llamada $mysqli, cambviar por la definitiva */

	if(!$_SERVER['REQUEST_METHOD']==='GET'){		
		header('HTTP/1.1 405 Method Not Allowed');
		exit;		
	}
	$categorias = null;
	
	include_once('db.php');
	
	$ret_query = $mysqli->multi_query( "CALL get_arbol_categorias(" .$_GET['cod_categoria'].")" );
	
	if ($ret_query) {
		do { 
			if ($result = $mysqli->store_result()) { 
			  while( $row = $result->fetch_row() ) { 				
				echo strval($row[0]." ".$row[1]." ".$row[2]." ".$row[3]." ".$row[4]." ".$row[5]);
				$categorias[] = $row;
			  } 
			  if( $mysqli->more_results() ) echo "\n\r";
			  
			  $result->close(); 
			  
			} 
		} while( $mysqli->next_result() ); 
	} else{
		echo "Error SQL: (" . $mysqli->errno .")-".$mysqli->error;
		exit;
	}	
	
	if (!is_null($categorias)) {
		echo json_encode($categorias,JSON_UNESCAPED_UNICODE);
	}

?>	
	