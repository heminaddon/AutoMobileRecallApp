<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Demo iFrame</title>
</head>
<body>
	<p>Sample Integration</p>


	<iframe src="http://localhost:8080/AutoMobileRecallApp/thirdparty-integration.jsp"
		width="auto" height="320" frameborder="1">
		<p>
			<a href="http://localhost:8080/AutoMobileRecallApp/thirdparty-integration.jsp">
				Fallback link for browsers that don't support iframes</a>
		</p>
	</iframe>

</body>
</html>