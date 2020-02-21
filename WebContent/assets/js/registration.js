$(document).ready(
						function() {
							$("#email").focusout(function() {

								if ($('#email').val() != "") {
										$.ajax({
										url : "emailfind",
										dataType : 'json',
										type : 'GET',
										contentType : 'application/json',

										data : {
											email : $('#email').val()
											},

								success : function(response) {
																							
										if (response === true){
											
											console.log(email);
											if ($("#email").val().match(/^[A-Z0-9._%-]+@[A-Z0-9.-]+\.([A-Z]{2,4})$/i))
											{
												 $('#EmailSuccess').text("Email is valid");
												 
												 var x = document.getElementById("email");
												  x.value = x.value.toLowerCase();
												  
												  document.getElementById("EmailSuccess").style.color = "green";
											 
											}
											
											else{ 
												  $('#EmailSuccess').text("Enter valid Email id");
												  document.getElementById("EmailSuccess").style.color = "red";
											}
											  
											}
									  else {
										  $('#EmailSuccess').text("your email already exist");
										  document.getElementById("EmailSuccess").style.color = "red";
								    		}
									},

									error : function(response) {
										$('#errormessage').text("Error occured");
										document.getElementById("errormessage").style.color = "red";
											}
										});
							    }
								
								else{
									$('#EmailSuccess').text("Email id field is requerd");
									document.getElementById("EmailSuccess").style.color = "red";
								}
						});
				});