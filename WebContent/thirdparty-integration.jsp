<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="Content-type" content="text/html; charset=UTF-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="theme-color" content="#003366" />
<meta name="keywords" content="">
<meta name="description" content="">
<title>Vehicle Recall</title>

<!-- CSS -->
<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.css">
<link rel="stylesheet" type="text/css" href="assets/css/master.css">
<!-- JS -->
<script src='https://code.jquery.com/jquery-3.3.1.min.js'></script>


</head>

<body>
	<div class="container">
		<!-- <div class="logo"></div>
 -->		
		<div id="middle-boxes">
			<div class="row">
				
				<div class="col-xs-12 col-md-8 columns">
					<section id="steps">
						<!-- <div class="steps_header">
							<div class="steps_header_box">
								<h2>STEP 2</h2>
								<hr>
								<h3>SUBMIT TO CHECK FOR RECALLS</h3>
								<div id="clear"></div>
							</div>
						</div> -->
						<div class="rmw-container">
							<div class="recall-lookup">
								<form action="" method="">
									<h2>Recall Lookup</h2>
									<p>
										<em>Enter your vehicle(s) below to check the current
											recall status.</em>
									</p>
									<div class="rmw-page1__inputs-block">
										<input id="vin" class="rmw-common-input"
											placeholder="Enter your vehicle VIN here">
									</div>

									<br>
									<button type="button" id="submitForm"
										class="rmw-common__submit">Check Status Now</button>
								</form>
							</div>

							<ul id="myUl" style="text-align: -webkit-left;">

							</ul>
							<div id="noInfoAvailable"></div>
							<div id="editform"></div>

							<div id="UsernameMessage"></div>


						</div>
					</section>
				</div>
				<div class="col-xs-12 col-md-4 columns">
				</div>
			</div>
		</div>
	</div>
</body>
<script src="assets/custom-functions.js"></script>
</html>