import { useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'; // Import sidebar
import AppRoutes from './route';

const App = () => {
	const location = useLocation();

	// Rute di mana sidebar ditampilkan
	const showSidebarRoutes = [
		'/admin/dashboard',
		'/admin/buku',
		'/admin/akun'
	];

	// Cek apakah rute aktif termasuk dalam daftar rute dengan sidebar
	const showSidebar = showSidebarRoutes.includes(location.pathname);

	// Cek apakah navbar/footer harus disembunyikan (untuk login/register) atau /admin/dashboard
	const hideNavbarAndFooter =
		location.pathname === '/login' ||
		location.pathname === '/register' ||
		location.pathname === '/admin/dashboard' || // Tambahkan kondisi untuk /admin/dashboard
		location.pathname === '/admin/buku' || // Tambahkan kondisi untuk /admin/dashboard
		location.pathname === '/admin/akun'; // Tambahkan kondisi untuk /admin/dashboard

	return (
		<>
			{!hideNavbarAndFooter && <Navbar />}
			<div style={{ display: 'flex' }}>
				{showSidebar && <Sidebar />}{' '}
				{/* Tampilkan sidebar hanya di rute tertentu */}
				<div style={{ flex: 1 }}>
					<AppRoutes />
				</div>
			</div>
			{!hideNavbarAndFooter && <Footer />}
		</>
	);
};

export default App;
