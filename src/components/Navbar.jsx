import { useState, useEffect } from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Drawer,
	List,
	ListItem,
	useMediaQuery,
	Menu,
	MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
	const [open, setOpen] = useState(false);
	const isMobile = useMediaQuery('(max-width:600px)');
	const [loggedIn, setLoggedIn] = useState(false);
	const [userName, setUserName] = useState('');
	const [anchorEl, setAnchorEl] = useState(null);
	const location = useLocation();

	const handleDrawerToggle = () => {
		setOpen(!open);
	};

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		setLoggedIn(false);
		setUserName('');
		localStorage.removeItem('userData');
		handleMenuClose();
	};

	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem('userData'));
		if (userData) {
			setLoggedIn(true);
			setUserName(userData.name);
		}
	}, []);

	const drawer = (
		<Drawer
			anchor="left"
			open={open}
			onClose={handleDrawerToggle}
			PaperProps={{
				sx: {
					width: '100%',
					maxWidth: 'none',
					backgroundColor: '#CFC9BC',
					color: 'black'
				}
			}}
		>
			<div className="flex items-center p-6 border-b-[1px] !border-[#D4D4D8]">
				<Typography
					sx={{ flexGrow: 1 }}
					className="!text-black !font-black !text-[24px]"
				>
					BOOKS
				</Typography>
				<IconButton
					edge="start"
					color="inherit"
					onClick={handleDrawerToggle}
				>
					<MenuIcon />
				</IconButton>
			</div>
			<List className="flex flex-col gap-2 !px-6">
				<ListItem
					button
					onClick={handleDrawerToggle}
					className="!py-3 mt-5 text-[14px] bg-[#353F4F] rounded"
				>
					<Link
						to="/"
						style={{ textDecoration: 'none', color: 'inherit' }}
					>
						Home
					</Link>
				</ListItem>
				<ListItem
					button
					onClick={handleDrawerToggle}
					className="!py-3 text-[14px] rounded"
				>
					<Link
						to="/buku"
						style={{ textDecoration: 'none', color: 'inherit' }}
					>
						Buku
					</Link>
				</ListItem>
				{!loggedIn && (
					<ListItem
						button
						onClick={handleDrawerToggle}
						className="!py-3 text-[14px] bg-[#DC3635] hover:bg-[#CFC9BC] rounded"
					>
						<Link
							to="/login"
							style={{ textDecoration: 'none', color: 'inherit' }}
						>
							Masuk
						</Link>
					</ListItem>
				)}
			</List>
		</Drawer>
	);

	return (
		<div>
			<AppBar
				className="!bg-[#CFC9BC] !shadow-none !absolute top-0"
				sx={{ height: isMobile ? 88 : 82 }}
			>
				{location.pathname === '/' && (
					<img
						src="public/img/petir-atas.png"
						alt=""
						className="absolute top-0 right-0 z-[-1]"
					/>
				)}
				<div className="max-w-7xl w-full mx-auto">
					<Toolbar
						className="!p-0"
						sx={{ height: isMobile ? 88 : 82 }}
					>
						{isMobile ? (
							<div className="w-full flex items-center p-6">
								<Typography
									sx={{ flexGrow: 1 }}
									className="!text-black !font-black !text-[24px]"
								>
									BOOKS
								</Typography>
								<IconButton
									edge="start"
									color="inherit"
									onClick={handleDrawerToggle}
								>
									<MenuIcon />
								</IconButton>
							</div>
						) : (
							<>
								<Typography
									sx={{ flexGrow: 1 }}
									className="!text-black !font-black !text-[24px]"
								>
									BOOKS
								</Typography>
								<div className="flex gap-8 items-center">
									<Link
										to="/"
										className="text-[14px] text-black font-semibold no-underline transition duration-150 ease-out hover:ease-in"
									>
										Beranda
									</Link>
									<Link
										to="/buku"
										className="text-[14px] text-black font-semibold no-underline transition duration-150 ease-out hover:ease-in"
									>
										Buku
									</Link>
									{loggedIn ? (
										<div>
											<div
												aria-controls="user-menu"
												aria-haspopup="true"
												onClick={handleMenuOpen}
												className="!text-black !border-lg flex items-center cursor-pointer"
											>
												<AccountCircle />
												<Typography
													variant="body2"
													className="!ml-2 !font-semibold"
												>
													{userName}{' '}
													{/* Tampilkan nama pengguna */}
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
														fontFamily:
															'Poppins, sans-serif',
														fontSize: '13px'
													}}
												>
													Logout
												</MenuItem>
											</Menu>
										</div>
									) : (
										<Link
											to="/login"
											className="text-[14px] text-[#E6FF00] font-semibold no-underline bg-black py-[8px] px-[12px] border-[2px] border-black rounded-full transition duration-150 ease-out hover:ease-in leading-none"
										>
											Masuk
										</Link>
									)}
								</div>
							</>
						)}
					</Toolbar>
				</div>
			</AppBar>
			{drawer}
		</div>
	);
}

export default Navbar;
