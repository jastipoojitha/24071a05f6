import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/BMIServlet")
public class BmiServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String name   = request.getParameter("name");
        double height = Double.parseDouble(request.getParameter("height")) / 100; // cm to meters
        double weight = Double.parseDouble(request.getParameter("weight"));

        double bmi = weight / (height * height);
        String category;

        if (bmi < 18) {
            category = "Under weight";
        } else if (bmi < 25) {
            category = "Normal weight";
        } else if (bmi < 30) {
            category = "Over weight";
        } else {
            category = "Obesity";
        }

        HttpSession session = request.getSession();
        session.setAttribute("name",     name);
        session.setAttribute("bmi",      bmi);
        session.setAttribute("category", category);

        //response.sendRedirect("result.jsp");
    }
}
