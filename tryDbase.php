<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mco";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

$fname = $_GET['fname'];
$uname = $_GET['uname'];
$pword = $_GET['pword'];

$sql = "INSERT INTO users VALUES ('', '$uname', '$pword', '$fname')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$sql = "SELECT user_id, user_username, user_password, user_fname FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "User ID: " . $row["user_id"]. " <br> Username: " . $row["user_username"]. " <br> Password: " . $row["user_password"]. "<br>";
  }
} else {
  echo "0 results";
}


?>
