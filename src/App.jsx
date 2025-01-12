import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AppRoutes from './route';
import Navbar from './components/navbar';
import './App.css';
import Footer from './components/Footer';

function AppContent() {
	const location = useLocation();
	const hideNavbarAndFooter =
		location.pathname === '/login' || location.pathname === '/register';

	return (
		<>
			{!hideNavbarAndFooter && <Navbar />}
			<AppRoutes />
			{!hideNavbarAndFooter && <Footer />}
		</>
	);
}

function App() {
	return (
		<Router>
			<AppContent />
		</Router>
	);
}

export default App;
