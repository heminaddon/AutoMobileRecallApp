package com.automobilerecall.app.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

@WebServlet("/findByVin")
public class VinController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public VinController() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		HttpClient httpClient = HttpClientBuilder.create().build();
		String vin = request.getParameter("vin");
		System.out.println(vin);
		HttpGet getRequest = new HttpGet("http://localhost:8097/findByVin?vin=" + vin);
		getRequest.addHeader("accept", "application/json");

		HttpResponse res = httpClient.execute(getRequest);
		String resp = EntityUtils.toString(res.getEntity());
		response.getWriter().write(resp);

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}
}
