import { Routes, Route } from 'react-router-dom';
import Home from './main/Home';
import Buku from './main/Buku';
import Login from './main/Login';
import Register from './main/Register';

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
		</Routes>
	);
};

export default AppRoutes;
