import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/pages/auth/Login";
import ForgotPassword from "./components/pages/auth/ForgotPassword";
import Dashboard from "./components/pages/auth/Dashboard";
import AdminDashboard from "./components/admin-pages/AdminDashboard";
import AdminMessages from "./components/admin-pages/AdminMessages";

// Hides admin screens from logged-out visitors.
// Real protection must still come from the API (auth:api on every admin endpoint).
function RequireAuth({ children }) {
  return localStorage.getItem("toc_token") ? children : <Navigate to="/login" replace />;
}

function AdminApp() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
      <Route path="/admin/dashboard" element={<RequireAuth><AdminDashboard /></RequireAuth>} />
      <Route path="/admin/messages" element={<RequireAuth><AdminMessages /></RequireAuth>} />
      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  );
}

export default AdminApp;
