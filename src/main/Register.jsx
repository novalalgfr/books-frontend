import {
	TextField,
	Typography,
	IconButton,
	InputAdornment,
	Button,
	Alert
} from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
	typography: {
		fontFamily: 'Poppins, Arial, sans-serif'
	}
});

function Register() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState('');
	const navigate = useNavigate();

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	const handleRegister = async () => {
		setError('');
		setSuccess('');
		setLoading(true);

		try {
			const response = await fetch('http://127.0.0.1:8000/api/akun', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email,
					name,
					password,
					role: 'user'
				})
			});

			const result = await response.json();

			if (result.success) {
				setSuccess(
					'Akun berhasil dibuat. Anda akan diarahkan ke halaman login.'
				);
				setTimeout(() => {
					navigate('/login');
				}, 2000);
			} else {
				setError(result.message || 'Gagal membuat akun.');
			}
		} catch {
			setError('Terjadi kesalahan jaringan.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<div className="bg-[#1E232F] min-h-screen h-full flex items-center justify-center px-72">
				<div className="w-full h-[500px] grid grid-cols-3 bg-white rounded-lg">
					<div className="col-span-2 bg-gray-300 rounded-l-lg">
						<img
							src="public/img/login-register.png"
							alt=""
							className="w-full h-full object-cover rounded-l-lg"
						/>
					</div>
					<div className="bg-white flex flex-col justify-center gap-4 p-5">
						<div>
							<Typography
								sx={{ flexGrow: 1 }}
								className="!text-black !font-black !text-[24px]"
							>
								BOOKS
							</Typography>
						</div>
						<div className="flex flex-col gap-4 mt-4">
							{error && <Alert severity="error">{error}</Alert>}
							{success && (
								<Alert severity="success">{success}</Alert>
							)}
							<TextField
								id="email"
								label="Email"
								variant="outlined"
								size="small"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								InputProps={{
									sx: { fontSize: 14 }
								}}
								InputLabelProps={{
									sx: { fontSize: 14 }
								}}
							/>
							<TextField
								id="name"
								label="Name"
								variant="outlined"
								size="small"
								value={name}
								onChange={(e) => setName(e.target.value)}
								InputProps={{
									sx: { fontSize: 14 }
								}}
								InputLabelProps={{
									sx: { fontSize: 14 }
								}}
							/>
							<TextField
								id="password"
								label="Password"
								variant="outlined"
								size="small"
								type={showPassword ? 'text' : 'password'}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								InputProps={{
									sx: { fontSize: 14 },
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={
													togglePasswordVisibility
												}
												edge="end"
											>
												{showPassword ? (
													<Visibility className="!text-[18px]" />
												) : (
													<VisibilityOff className="!text-[18px]" />
												)}
											</IconButton>
										</InputAdornment>
									)
								}}
								InputLabelProps={{
									sx: { fontSize: 14 }
								}}
							/>
						</div>
						<div>
							<Button
								variant="contained"
								className="!px-4 !py-2 !shadow-none !text-white !text-[14px] w-full !bg-[#11190C] !normal-case"
								onClick={handleRegister}
								disabled={loading}
							>
								{loading ? 'Loading...' : 'Register'}
							</Button>
							<a
								className="!text-[14px] !text-[#11190C] w-full !normal-case w-full text-center block mt-3"
								href="/login"
							>
								Sudah Punya Akun?
								<span className="underline">
									{' '}
									Masuk Disini!
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default Register;
