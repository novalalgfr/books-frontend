import { Menu, MenuItem, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {
	const [userName, setUserName] = useState(''); // Nama user dinamis
	const [anchorEl, setAnchorEl] = useState(null); // Dropdown anchor
	const navigate = useNavigate(); // Hook to handle redirection

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		setUserName('');
		localStorage.removeItem('userData'); // Clear user data on logout
		handleMenuClose();
		navigate('/'); // Redirect to homepage ("/")
		// Tambahkan logika logout (hapus token, redirect, dsb)
	};

	// Simulasi pengambilan data user setelah login
	useEffect(() => {
		// Ambil data user dari localStorage
		const userData = JSON.parse(localStorage.getItem('userData')); // Ambil dari localStorage
		if (userData) {
			setUserName(userData.name); // Set nama dari data user
		}
	}, []);

	return (
		<div className="w-60 p-6 !bg-[#11190C] text-white h-screen shadow-sm">
			<div className="flex h-full flex-col justify-between">
				<div>
					<div className="pb-8">
						<Typography
							variant="h6"
							sx={{ flexGrow: 1 }}
						>
							My Website
						</Typography>
					</div>
					<nav>
						<NavLink
							to="/admin/dashboard"
							className={({ isActive }) =>
								`block py-2 rounded ${
									isActive
										? 'font-bold text-[14px]'
										: 'hover:font-semibold font-normal text-[14px] transition duration-150 ease-out hover:ease-in'
								}`
							}
						>
							Dashboard
						</NavLink>
						<NavLink
							to="/admin/buku"
							className={({ isActive }) =>
								`block py-2 rounded ${
									isActive
										? 'font-bold text-[14px]'
										: 'hover:font-semibold font-normal text-[14px] transition duration-150 ease-out hover:ease-in'
								}`
							}
						>
							Buku
						</NavLink>
						<NavLink
							to="/admin/akun"
							className={({ isActive }) =>
								`block py-2 rounded ${
									isActive
										? 'font-bold text-[14px]'
										: 'hover:font-semibold font-normal text-[14px] transition duration-150 ease-out hover:ease-in'
								}`
							}
						>
							Akun
						</NavLink>
					</nav>
				</div>

				<div>
					<div>
						<div
							aria-controls="user-menu"
							aria-haspopup="true"
							onClick={handleMenuOpen}
							className="!text-white !border-lg flex items-center cursor-pointer"
						>
							<Typography
								variant="body2"
								className="block w-full py-2 px-3 bg-[#383838] rounded"
							>
								{userName} {/* Tampilkan nama pengguna */}
							</Typography>
						</div>

						<Menu
							id="user-menu"
							anchorEl={anchorEl}
							open={Boolean(anchorEl)}
							onClose={handleMenuClose}
						>
							<MenuItem
								onClick={handleLogout}
								sx={{
									fontFamily: 'Poppins, sans-serif',
									fontSize: '13px'
								}}
							>
								Logout
							</MenuItem>
						</Menu>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
