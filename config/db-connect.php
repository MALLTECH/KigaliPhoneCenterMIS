<?php
  $dbhost = $_ENV['DB_HOST'];
  $dbuser = $_ENV['DB_USER'];
  $dbpass = $_ENV['DB_USER_PASSWORD'];
  $dbname = $_ENV['DB_NAME'];
  $db = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
  if(mysqli_connect_errno()){
    echo "Failed to connect to MySQL.". mysqli_connect_error();
  }
?>