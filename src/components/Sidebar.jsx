import { Menu, MenuItem, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {
	const [userName, setUserName] = useState('');
	const [anchorEl, setAnchorEl] = useState(null);
	const navigate = useNavigate();

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		setUserName('');
		localStorage.removeItem('userData');
		handleMenuClose();
		navigate('/');
	};

	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem('userData'));
		if (userData) {
			setUserName(userData.name);
		}
	}, []);

	return (
		<div className="w-60 p-6 !bg-[#11190C] text-white h-screen shadow-sm">
			<div className="flex h-full flex-col justify-between">
				<div>
					<div className="pb-8">
						<Typography
							sx={{ flexGrow: 1 }}
							className="!text-white !font-black !text-[24px]"
						>
							BOOKS
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
								{userName}
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
