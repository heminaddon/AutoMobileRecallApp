<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>


<html lang="en">
<head>
<title>Import CSV</title>
<!-- JQuery library-->
<script src='https://code.jquery.com/jquery-3.3.1.min.js'></script>

<!-- Bootstrap core CSS-->
<link href="assets/css/bootstrap.min.css" rel="stylesheet" />

<!-- Custom Style-->
<link href="assets/css/app-style.css" rel="stylesheet" />
<style type="text/css">
th, td {
  padding: 15px;
  text-align: left;
}

</style>
</head>

<body>

	<div align="center">
		<br>
		<div class="col-lg-8">
			<div class="card">
				<div class="card-body">
					<form method="POST" enctype="multipart/form-data"
						id="fileUploadForm">
						<div class="form-group row">

							<label for="input-8" class="col-sm-2 col-form-label">Select
								File</label>
							<div class="col-sm-10">
								<input type="file" path="file" class="form-control" id="input-8"
									name="file" accept=".csv" required="required">
							</div>
						</div>
						<button type="submit" class="btn btn-success" id="submitcsv"
							value="Submit">
							<i class="fa fa-check-square-o"></i> SAVE
						</button>
						<div id="responsefromajax"></div>
						<br>
						<br>
						<div id="duplicateVin" ></div>
						<ul id="myUl1" style="text-align: -webkit-left;">

							</ul>
							
							<table border="1|0" id="myTable" >

							</table>
					</form>
				</div>
			</div>
		</div>
	</div>

</body>

<script src="assets/process-csv.js"></script>
</html>