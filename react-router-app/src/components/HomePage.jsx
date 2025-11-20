
import "../index.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate=useNavigate()
  function handle(){
    navigate("/contact")
  }
  return (
    <div className="home-container">
      <h1 className="title">Welcome to My Website 👋</h1>

      <p className="subtitle">
        This is a simple React Router demo. Click below to explore the Contact Page.
      </p>

        <button className="btn" onClick={handle}>Go to Contact Page</button>
     
    </div>
  );
}

export default HomePage;
