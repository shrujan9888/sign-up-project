import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

<h1>Owner Registration</h1>
const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      navigate("/login");
    } else {
      setUser(loggedInUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return user ? (
    <div>
      <h2>Welcome, {user.ownerName}!</h2>
      <p>Business: {user.businessName}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  ) : null;
};

export default Dashboard;
