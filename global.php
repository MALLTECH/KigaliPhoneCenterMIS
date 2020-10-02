<?php
 session_start();
 require_once "vendor/autoload.php";
 $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
 $dotenv->load();
 require_once "config/db-connect.php";

 $ERRORS = isset($_SESSION['errors']) ? $_SESSION['errors'] : [];
 $NOTICES = isset($_SESSION['notices']) ? $_SESSION['notices'] : [];
 $THEME = "dark";
 unset($_SESSION['errors']);
 unset($_SESSION['notices']);
 
?>