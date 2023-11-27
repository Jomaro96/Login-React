<?php
session_start();
include("conexion.php");
$conn = connect();

//Getting post data
if (isset($_POST['email']) && isset($_POST['pwd'])) {
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

?>