import { LocationOn, Phone } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Footer() {
	const navigate = useNavigate();

	return (
		<div className="bg-[#11190C] text-white mt-24">
			<div className="max-w-7xl mx-auto py-16">
				<div className="grid grid-cols-3 justify-items-center	 gap-8">
					<div>
						<Typography className="!text-xl !font-bold">
							BOOKS
						</Typography>
						<Typography className="!text-zinc-300 !text-[14px] !mt-4">
							Books adalah platform yang menyediakan koleksi buku
							lengkap dari berbagai genre, mulai dari klasik
							hingga buku modern. Kami bertujuan untuk memberikan
							pengalaman membaca yang menyenangkan dan
							menginspirasi bagi para pembaca dari segala usia.
						</Typography>
					</div>
					<div>
						<Typography className="!text-xl !font-bold">
							Menu
						</Typography>
						<ul className="list-none mt-4">
							<ul>
								<li
									className="!text-zinc-300 !text-[14px] mb-4 cursor-pointer hover:underline"
									onClick={() => navigate('/')}
								>
									Beranda
								</li>
								<li
									className="!text-zinc-300 !text-[14px] mb-4 cursor-pointer hover:underline"
									onClick={() => navigate('/buku')}
								>
									Buku
								</li>
								<li
									className="!text-zinc-300 !text-[14px] mb-4 cursor-pointer hover:underline"
									onClick={() => navigate('/login')}
								>
									Masuk
								</li>
							</ul>
						</ul>
					</div>
					<div>
						<Typography className="!text-xl !font-bold">
							Informasi Kontak
						</Typography>
						<ul className="list-none mt-4">
							<li className="!text-zinc-300 !text-[14px] mb-4">
								<div className="flex gap-4">
									<div>
										<LocationOn className="!text-[24px]" />
									</div>
									<div>
										Gedung Setiabudi 2, lt 2 suite 207 B-C
										Jl. H.R Rasuna Said Kav.62 - Kuningan
										Jakarta Selatan DKI Jakarta 12920
									</div>
								</div>
							</li>
							<li className="!text-zinc-300 !text-[14px] mb-4">
								<div className="flex gap-4">
									<div>
										<Phone className="!text-[24px]" />
									</div>
									<div>021-3413452</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
