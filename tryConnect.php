<html>
<body>
 <form action="tryDbase.php" method="GET">
   First Name: <input type="text" name="fname"><br>
   User Name: <input type="text" name="uname"><br>
   Password: <input type="text" name="pword"><br>
  <input type="submit">
 </form>

 <?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mcoSample";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

$sql = "SELECT as_ID, as_uName, as_pWord FROM adminStaff";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "User ID: " . $row["as_ID"]. " <br> Username: " . $row["as_uName"]. " <br> Password: " . $row["as_pWord"]. "<br>";
  }
} else {
  echo "0 results";
}


?>


</body>
</html>
