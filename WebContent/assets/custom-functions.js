$('#submitForm')
		.click(
				function(e) {
				
					var vin = $('#vin').val();
					$('#myUl').empty();
					$('#editform').empty();
					$('#UsernameMessage').empty();
					$('#noInfoAvailable').empty();

					var vinregex = /^[A-HJ-NPR-Z0-9]{17}/;
					if (vin.match(vinregex)) {
				
						$.ajax({
									url : 'findByVin',
									dataType : 'json',
									type : 'GET',
									contentType : 'application/json',
									data : {
										vin : $('#vin').val()
									},

									success : function(response) {

										if (response != null) {
											$(".formGropuSubmit").remove();
											validateForm(vin);
											var x;

											for (x in response) {
												var text = "";
												var options = "";
												text = response[x];
												console.log(x + " : " + text);
												if (x == "id")
													continue;

												options += '<li> <label><b>'
														+ x + ' :</b></label> '
														+ text + ' </li>';

												$("#myUl").append(options);

											}
											return
										} else {
											$(".formGropuSubmit").remove();

											$('#noInfoAvailable')
													.text(
															"No information available for this Vin Number. Fill please the form so we will catch if there is any update");
											document
													.getElementById("noInfoAvailable").style.color = "red";

											validateForm(vin);
											return;
										}

										$('#myUl').empty();
									},
									error : function(error) {
									}
								});
					} else {
						$('#UsernameMessage').text("Enter valid vin number");
						document.getElementById("UsernameMessage").style.color = "red";
					}

				});



function validateForm(vin) {

	var myvar = 'Name:<br>'
			+ ' <input type="text" name="name" id="firstname" >'
			+ ' <br>'
			+ ' <input type="hidden" name="vin" value="'
			+ vin
			+ '" >'
			+ 'Email:<br>'
			+ ' <input type="email" name="email" id="email" required>'
			+ ' <br>'
			+ ' Mobile no:<br>'
			+ '  <input type="text" name="mobileNum" id="mobilenumber" placeholder="Enter 10 digit number" required>'
			+ ' <br>' + ' <br>'
			+ ' <input type="button" value="Submit" onClick="sent_Mail()">';

	$("#editform").append(myvar);

};



function sent_Mail() {
	$('#UsernameMessage').empty();
	var vin = $('#vin').val();
	var fname = $('#firstname').val();
	var email = $('#email').val();
	var phone = $('#mobilenumber').val();
	var json = {
		"vin" : vin,
		"firstName" : fname,
		"phone" : phone,
		"email" : email,
	};
	if ($("#email").val().match(/^[A-Z0-9._%-]+@[A-Z0-9.-]+\.([A-Z]{2,4})$/i)) {
		var phoneRegex = /^([0-9]{10})$/;
		console.log(JSON.stringify(json))

		if (phone.match(phoneRegex)) {
			
			$.ajax({
						url : "sendEmail",
					    dataType : 'json',
						type : 'GET',
						contentType : 'application/json',
						//data : JSON.stringify(json),
						data : {
							vin : $('#vin').val(),
							firstName : $('#firstname').val(),
							email : $('#email').val(),
							phone : $('#mobilenumber').val(),
						},

						success : function(response) {
							if (response.success === true) {
								$('#firstname').val('')
								$('#email').val('')
								$('#mobilenumber').val('')
								$('#UsernameMessage')
										.text(
												"Notification has been sent successfully");
								document.getElementById("UsernameMessage").style.color = "green";
								alert("Notification has been sent successfully");
							} else {
								$('#UsernameMessage')
										.text(
												"Notification not send please try letter");
								document.getElementById("UsernameMessage").style.color = "red";
							}
						}
					});
		} else {
			$('#UsernameMessage').text("Enter valid Phone number");
			document.getElementById("UsernameMessage").style.color = "red";
		}
	} else {
		$('#UsernameMessage').text("Enter valid Email id");
		document.getElementById("UsernameMessage").style.color = "red";
	}
};