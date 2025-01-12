import {
	TextField,
	Typography,
	IconButton,
	InputAdornment,
	Button
} from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontFamily: 'Poppins, Arial, sans-serif'
	}
});

function Login() {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
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
					<div className="flex flex-col justify-center gap-4 p-5">
						<div>
							<Typography
								variant="h6"
								sx={{ flexGrow: 1 }}
								className="text-black"
							>
								My Website
							</Typography>
						</div>
						<div className="flex flex-col gap-2 mt-4">
							<TextField
								id="email"
								label="Email"
								variant="outlined"
								size="small"
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
								className="!px-4 !py-2 !shadow-none !text-[14px] w-full !bg-[#11190C] !normal-case"
							>
								Login
							</Button>
						</div>
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default Login;
