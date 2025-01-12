import { Routes, Route } from 'react-router-dom';
import Home from './main/Home';
import About from './main/About';

const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/about"
				element={<About />}
			/>
		</Routes>
	);
};

export default AppRoutes;
