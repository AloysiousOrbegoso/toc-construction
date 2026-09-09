import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("toc_user") || "{}");
  function logout() { localStorage.removeItem("toc_token"); localStorage.removeItem("toc_user"); navigate("/login", { replace: true }); }
  return <main className="dashboard-page"><h1>Welcome {user.name || "Admin"}</h1><button onClick={logout}>Log out</button></main>;
}