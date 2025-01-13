import { Routes, Route } from 'react-router-dom';
import Login from './main/Login';
import Register from './main/Register';
import Home from './main/user/Home';
import Buku from './main/user/Buku';
import Dashboard from './main/admin/Dashboard';
import AdminBuku from './main/admin/AdminBuku';
import AdminAkun from './main/admin/AdminAkun';

const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/buku"
				element={<Buku />}
			/>
			<Route
				path="/login"
				element={<Login />}
			/>
			<Route
				path="/register"
				element={<Register />}
			/>
			<Route
				path="/admin/dashboard"
				element={<Dashboard />}
			/>
			<Route
				path="/admin/buku"
				element={<AdminBuku />}
			/>
			<Route
				path="/admin/akun"
				element={<AdminAkun />}
			/>
		</Routes>
	);
};

export default AppRoutes;
