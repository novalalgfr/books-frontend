import { LocationOn, Phone } from '@mui/icons-material';
import { Typography } from '@mui/material';

function Footer() {
	return (
		<div className="bg-[#11190C] text-white mt-24">
			<div className="max-w-7xl mx-auto py-16">
				<div className="grid grid-cols-3 justify-items-center	 gap-8">
					<div>
						<Typography className="!text-xl !font-bold">
							My Website
						</Typography>
						<Typography className="!text-zinc-300 !text-[14px] !mt-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</Typography>
					</div>
					<div>
						<Typography className="!text-xl !font-bold">
							Menu
						</Typography>
						<ul className="list-none mt-4">
							<li className="!text-zinc-300 !text-[14px] mb-4 cursor-pointer hover:underline">
								Beranda
							</li>
							<li className="!text-zinc-300 !text-[14px] mb-4 cursor-pointer hover:underline">
								Buku
							</li>
							<li className="!text-zinc-300 !text-[14px] mb-4 cursor-pointer hover:underline">
								Blog
							</li>
							<li className="!text-zinc-300 !text-[14px] mb-4 cursor-pointer hover:underline">
								Masuk
							</li>
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
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit
									</div>
								</div>
							</li>
							<li className="!text-zinc-300 !text-[14px] mb-4">
								<div className="flex gap-4">
									<div>
										<Phone className="!text-[24px]" />
									</div>
									<div>021-XXXXXX</div>
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
