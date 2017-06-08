<?php
//header("Access-Control-Allow-Origin: *");
//header("Content-Type: application/json; charset=UTF-8");

 $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $emp_no = $request->benef_name;
    $first_name = $request->benef_surname;
    $last_name = $request->benef_afm;
    $dept_name = $request->benef_desc;
echo "---".$last_name."---";

$servername = "localhost";
$username = "root";
$password = "qwe123"; //Your User Password
$dbname = "elkedb"; //Your Database Name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO base_beneficiary (benef_name, benef_surname, benef_afm, benef_desc)
VALUES ('$emp_no', '$first_name', '$last_name' , '$dept_name')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
