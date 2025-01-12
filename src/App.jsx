import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './route';
import Navbar from './components/navbar';
import './App.css';

function App() {
	return (
		<Router>
			<Navbar />
			<AppRoutes />
		</Router>
	);
}

export default App;
