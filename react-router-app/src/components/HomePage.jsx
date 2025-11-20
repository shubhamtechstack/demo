import { Link } from "react-router-dom";
import "../index.css";

function HomePage() {
  return (
    <div className="home-container">
      <h1 className="title">Welcome to My Website 👋</h1>

      <p className="subtitle">
        This is a simple React Router demo. Click below to explore the Contact Page.
      </p>

      <Link to="/contact">
        <button className="btn">Go to Contact Page</button>
      </Link>
    </div>
  );
}

export default HomePage;
