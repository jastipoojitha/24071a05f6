<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head><title>BMI Result</title></head>
<body>
  <%
    String name     = (String) session.getAttribute("name");
    Double bmi      = (Double) session.getAttribute("bmi");
    String category = (String) session.getAttribute("category");

    if (name == null) {
        response.sendRedirect("index.html");
        return;
    }
  %>
  <h2>BMI Result for <%= name %></h2>
  <p>Your BMI: <strong><%= bmi %></strong></p>
  <p>Category: <strong><%= category %></strong></p><br><br><br><br><br><br><br><br><br><br><br><br><br>
<footer>(24071A05F6) Jasti Poojitha</footer>
</body>
</html>
