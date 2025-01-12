import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './route';
import Navbar from './components/navbar';
import './App.css';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<Navbar />
			<AppRoutes />
			<Footer />
		</Router>
	);
}

export default App;
