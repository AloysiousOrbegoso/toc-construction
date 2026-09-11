import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/pages/auth/Login";
import ForgotPassword from "./components/pages/auth/ForgotPassword";
import AdminDashboard from "./components/admin-pages/AdminDashboard";
import AdminMessages from "./components/admin-pages/AdminMessages";
import AdminProjects from "./components/admin-pages/AdminProjects";
import AdminServices from "./components/admin-pages/AdminServices";
import AdminCareers from "./components/admin-pages/AdminCareers";
import AdminUsers from "./components/admin-pages/AdminUsers";
import AdminSettings from "./components/admin-pages/AdminSettings";

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
      <Route path="/admin/dashboard" element={<RequireAuth><AdminDashboard /></RequireAuth>} />
      <Route path="/admin/messages" element={<RequireAuth><AdminMessages /></RequireAuth>} />
      <Route path="/admin/projects" element={<RequireAuth><AdminProjects /></RequireAuth>} />
      <Route path="/admin/services" element={<RequireAuth><AdminServices /></RequireAuth>} />
      <Route path="/admin/careers" element={<RequireAuth><AdminCareers /></RequireAuth>} />
      <Route path="/admin/users" element={<RequireAuth><AdminUsers /></RequireAuth>} />
      <Route path="/admin/settings" element={<RequireAuth><AdminSettings /></RequireAuth>} />
      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  );
}

export default AdminApp;
