<?php

include("conexion.php");
$conn = connect();

// Set CORS headers to allow requests from any origin
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$eData = file_get_contents("php://input");
$dData = json_decode($eData, true);

// Access the email and password values
    $email = $dData['email'];
    $pwd = $dData['password'];
    $queryselect = "SELECT * FROM users WHERE email = '".$email."'";
    $commitselect = mysqli_query($conn,$queryselect);
    $fila = mysqli_fetch_assoc($commitselect);
    $rows = mysqli_num_rows($commitselect);

    if ($rows == 0) {

        //echo 'User not registered';
        echo json_encode(array('result' => "User not registered", 'value' => false));
       
    } 
    else
    {

        if($email == $fila["email"] && $pwd == $fila["pwd"])
        {
            echo json_encode(array('result' => "Logged in successfully", 'value' => true));
            $_SESSION["user_port"] = $fila["username"];
            
        }
        else
        {
        //echo "User or Password error";
        echo json_encode(array('result' => "User or Password error", 'value' => false));
        
        }
    }
    mysqli_close($conn);
//Getting post data
/*if (isset($_POST['email']) && isset($_POST['pwd'])) {
    // Access the email and password values
    $email = $_POST['email'];
    $pwd = $_POST['pwd'];
    $queryselect = "SELECT * FROM users WHERE email = '".$email."'";
    $commitselect = mysqli_query($conn,$queryselect);
    $fila = mysqli_fetch_assoc($commitselect);
    $rows = mysqli_num_rows($commitselect);

    if ($rows == 0) {

        //echo 'User not registered';
        echo json_encode(array('error' => true));
    } 
    else
    {

        if($email == $fila["email"] && $pwd == $fila["pwd"])
        {
            echo json_encode(array('error' => false));
            $_SESSION["user_port"] = $fila["username"];
        }
        else
        {
        //echo "User or Password error";
        echo json_encode(array('error' => true));
        }
    }
    
    
} else {
    echo json_encode(array('error' => true));
    
}



//Implement password hash later

?>*/