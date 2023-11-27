<?php

function connect() {
$dbhost = "";
$dbuser = "";
$dbpass = "";
$dbname = "";
$conn = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
if (!$conn)
{
	die("No hay conexion: ".mysqli_connect_error);
}
return $conn;
}
?>