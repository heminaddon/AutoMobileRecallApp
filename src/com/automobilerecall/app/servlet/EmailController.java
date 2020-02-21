package com.automobilerecall.app.servlet;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

@WebServlet("/sendEmail")
public class EmailController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public EmailController() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		handleRequest(request, response);

	}

	private void handleRequest(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ClientProtocolException {
		HttpClient httpClient = HttpClientBuilder.create().build();

		HttpPost postRequest = new HttpPost("http://localhost:8097/sendEmail");
		ObjectMapper mapper = new ObjectMapper();
		ObjectNode node = mapper.createObjectNode();
		node.put("vin", request.getParameter("vin"));
		node.put("phone", request.getParameter("phone"));
		node.put("email", request.getParameter("email"));
		node.put("firstName", request.getParameter("firstName"));

		String JSON_STRING = node.toString();

		postRequest.setEntity(new StringEntity(JSON_STRING, ContentType.APPLICATION_JSON));
		HttpResponse res = httpClient.execute(postRequest);

		response.getWriter().write(EntityUtils.toString(res.getEntity()));
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}
}
