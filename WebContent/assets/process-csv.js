$("#submitcsv")
    .click(
        function(event) {
            $('#responsefromajax').empty();
            $("#myTable").empty();
            // stop submit the form, we will post it manually.
            event.preventDefault();

            // Get form
            var form = $('#fileUploadForm')[0];

            // Create an FormData object
            var data = new FormData(form);

            // disabled the submit button
            $("#submitcsv").prop("disabled", true);

            $
                .ajax({
                    type: "POST",
                    enctype: 'multipart/form-data',
                    url: "import-csv",
                    data: data,
                    processData: false,
                    contentType: false,
                    cache: false,
                    timeout: 600000,
                    success: function(response) {
                        console.log(response)
                        var data = JSON.parse(response);
                        if (data.success != false) {
                            // enable the submit button
                            $("#submitcsv").prop("disabled", false);
                            $('#responsefromajax').text("data saved successfully");
                            document.getElementById("responsefromajax").style.color = "green";
                        } else {
                        	
                        	var map = data.errors;
                        	
                        	 $('#duplicateVin').text("IMPORT SUMMARY");
                                  document.getElementById("duplicateVin").style.color = "red";
                        	var keys = Object.keys(map)
                        	// $("#myUl1").append("<table border='1'>");
                        	keys.forEach(key=>{
                        			console.log(key + '|' + map[key]);
                        			var options = '<tr><td>' + key + '</td><td>' + map[key] + ' </td></tr> ';
                        			$("#myTable").append(options);
                        		});
                        	$("#submitcsv").prop("disabled", false);
                        	// $("#myUl1").append("</table>");
                        
                        }
                    },
                    error: function(data) {
                        $('#responsefromajax').text(
                            "oops something went wrong");
                        document.getElementById("responsefromajax").style.color = "red";
                        $("#submitcsv").prop("disabled", false);
                    }
                });
        });