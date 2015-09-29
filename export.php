<?php 
if(isset($_POST['export-textarea'])){
	
header("Pragma: public");
header("Expires: 0");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0"); 
header("Content-Type: application/force-download");
header("Content-Type: application/octet-stream");
header("Content-Type: application/download");
header("Content-Disposition: attachment;filename=simbyone-builder.html ");
header("Content-Transfer-Encoding: binary ");


	echo '<style>';
	require_once('assets/css/ars_coolection.css');
	require_once('assets/css/style.css');
	echo '</style>';
echo '<link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900,200italic,300italic,400italic,600italic,700italic,900italic" rel="stylesheet" type="text/css"><link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<div class="ars_Collcontent"><div class="ars_Collbody">';

	echo '<div id="sec-col" class="sec_col">'.$_POST['export-textarea'].'</div>';
	

	
	}

?>