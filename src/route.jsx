import { Routes, Route } from 'react-router-dom';
import Home from './main/Home';
import Buku from './main/Buku';

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
		</Routes>
	);
};

export default AppRoutes;
