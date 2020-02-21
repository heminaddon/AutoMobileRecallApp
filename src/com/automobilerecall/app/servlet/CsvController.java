package com.automobilerecall.app.servlet;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Paths;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import org.apache.commons.io.IOUtils;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.mime.MultipartEntity;
import org.apache.http.entity.mime.content.FileBody;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

@WebServlet("/import-csv")
@MultipartConfig
public class CsvController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String filePath;
	public static final String PREFIX = "stream2file";
	public static final String SUFFIX = ".tmp";

	public CsvController() {
		super();
	}

	@Override
	public void init() throws ServletException {
		filePath = getServletContext().getInitParameter("file-upload");
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		handleRequest(request, response);
	}

	@SuppressWarnings("deprecation")
	private void handleRequest(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException, ClientProtocolException {
		Part filePart = request.getPart("file");
		if (filePart!=null && filePart.getSize()>0) {
			//String fileName = Paths.get(filePart.getSubmittedFileName()).getFileName().toString(); // MSIE fix.
			InputStream fileContent = filePart.getInputStream();
			File f = stream2file(fileContent, filePart.getSubmittedFileName());
			HttpClient client = HttpClientBuilder.create().build();
			HttpPost post = new HttpPost("http://localhost:8097/import-csv");
			MultipartEntity entity = new MultipartEntity();
			entity.addPart("file", new FileBody(f));
			post.setEntity(entity);
			HttpResponse res = client.execute(post);
			response.getWriter().write(EntityUtils.toString(res.getEntity()));
		}else {
			response.getWriter().write("{\"success\":false,\"errors\":{\"Incorrect file type.\":\"Please enter a CSV file.\"}}");
		}

	}

	public static File stream2file(InputStream in, String name) throws IOException {
		final File tempFile = File.createTempFile(name, SUFFIX);
		tempFile.deleteOnExit();
		try (FileOutputStream out = new FileOutputStream(tempFile)) {
			IOUtils.copy(in, out);
		}
		return tempFile;
	}
}
