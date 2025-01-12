import { ArrowRightAlt, LocationOn, Phone } from '@mui/icons-material';
import { Typography } from '@mui/material';

function Home() {
	return (
		<>
			<img
				src="public/img/petir-bawah.png"
				alt=""
				className="absolute top-0 right-0 z-[-1]"
			/>
			<div className="max-w-7xl mx-auto mt-16">
				<div className="grid grid-cols-2 items-center gap-6">
					<div>
						<Typography className="!text-7xl !font-bold">
							Lorem ipsum dolor sit amet
						</Typography>
						<Typography className="!mt-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</Typography>
					</div>
					<div>
						<img
							src="public/img/book-model.png"
							alt="people"
						/>
					</div>
				</div>
			</div>

			<div className="bg-white">
				<div className="max-w-7xl mx-auto py-6">
					{/* <Typography className="!text-2xl !font-bold">
						OFFICIAL STORE
					</Typography> */}
					<div className="grid grid-cols-6 gap-4">
						<img
							src="public/img/official-store-1.svg"
							alt=""
						/>
						<img
							src="public/img/official-store-2.svg"
							alt=""
						/>
						<img
							src="public/img/official-store-3.svg"
							alt=""
						/>
						<img
							src="public/img/official-store-4.svg"
							alt=""
						/>
						<img
							src="public/img/official-store-5.svg"
							alt=""
						/>
						<img
							src="public/img/official-store-6.svg"
							alt=""
						/>
					</div>
				</div>
			</div>

			<div className="bg-[#11190C]">
				<div className="max-w-5xl mx-auto py-16">
					<Typography className="!text-5xl !font-black text-center text-white">
						<span className="!text-[#E6FF00]">Lorem Ipsum</span>{' '}
						Dolor Sit Amet
					</Typography>
					<div className="grid grid-cols-3 gap-4 mt-16">
						<div className="col-span-2 bg-[#F3F1EE] rounded-[16px] p-6">
							<div className="grid grid-cols-2 items-end gap-4">
								<div>
									<Typography className="!text-2xl !font-bold">
										Lorem Ipsum Dolor Sit Amet Consectetur
									</Typography>
									<Typography className="!text-[14px] !mt-2 !mb-3">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut
									</Typography>
									<a
										href=""
										className="!text-[14px] !font-semibold"
									>
										Explore Now{' '}
										<ArrowRightAlt className="!text-[24px]" />
									</a>
								</div>
								<div>
									<img
										src="public/img/illustrasi-2.svg"
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="bg-[#F3F1EE] rounded-[16px] p-6">
							<div className="h-full grid grid-cols-1 gap-4 content-between">
								<div className="ml-auto">
									<img
										src="public/img/illustrasi-1.svg"
										alt=""
										className="!h-[190px]"
									/>
								</div>
								<div>
									<Typography className="!text-2xl !font-bold">
										Lorem Ipsum Dolor Sit Amet Consectetur
									</Typography>
									<Typography className="!text-[14px] !mt-2 !mb-3">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut
									</Typography>
									<a
										href=""
										className="!text-[14px] !font-semibold"
									>
										Explore Now{' '}
										<ArrowRightAlt className="!text-[24px]" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<img
				src="public/img/divider.png"
				alt=""
			/>

			<div className="max-w-7xl mx-auto py-16 mt-16">
				<div className="flex justify-between items-center">
					<Typography className="!text-5xl !font-black">
						Our Best Selling!
					</Typography>
					<Typography className="!text-[14px] !font-semibold">
						Explore <ArrowRightAlt className="!text-[24px]" />
					</Typography>
				</div>
				<div className="grid grid-cols-5 gap-4 mt-12">
					<div className="bg-[#F3F1EE] rounded-[16px]">
						<div className="flex flex-col gap-4 p-4">
							<div>
								<img
									src="public/img/book-1.png"
									alt=""
									className="w-full rounded-[8px]"
								/>
							</div>
							<div>
								<Typography className="!text-[17px] !font-bold">
									Lorem ipsum dolor
								</Typography>
								<Typography className="!text-[13px] text-justify !mt-2 !mb-3">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit,
								</Typography>
								<a
									href=""
									className="!text-[14px] !font-semibold"
								>
									Purchase Now{' '}
									<ArrowRightAlt className="!text-[24px]" />
								</a>
							</div>
						</div>
					</div>
					<div className="bg-[#F3F1EE] rounded-[16px]">
						<div className="flex flex-col gap-4 p-4">
							<div>
								<img
									src="public/img/book-2.png"
									alt=""
									className="w-full rounded-[8px]"
								/>
							</div>
							<div>
								<Typography className="!text-[17px] !font-bold">
									Lorem ipsum dolor
								</Typography>
								<Typography className="!text-[13px] text-justify !mt-2 !mb-3">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit,
								</Typography>
								<a
									href=""
									className="!text-[14px] !font-semibold"
								>
									Purchase Now{' '}
									<ArrowRightAlt className="!text-[24px]" />
								</a>
							</div>
						</div>
					</div>
					<div className="bg-[#F3F1EE] rounded-[16px]">
						<div className="flex flex-col gap-4 p-4">
							<div>
								<img
									src="public/img/book-3.png"
									alt=""
									className="w-full rounded-[8px]"
								/>
							</div>
							<div>
								<Typography className="!text-[17px] !font-bold">
									Lorem ipsum dolor
								</Typography>
								<Typography className="!text-[13px] text-justify !mt-2 !mb-3">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit,
								</Typography>
								<a
									href=""
									className="!text-[14px] !font-semibold"
								>
									Purchase Now{' '}
									<ArrowRightAlt className="!text-[24px]" />
								</a>
							</div>
						</div>
					</div>
					<div className="bg-[#F3F1EE] rounded-[16px]">
						<div className="flex flex-col gap-4 p-4">
							<div>
								<img
									src="public/img/book-4.png"
									alt=""
									className="w-full rounded-[8px]"
								/>
							</div>
							<div>
								<Typography className="!text-[17px] !font-bold">
									Lorem ipsum dolor
								</Typography>
								<Typography className="!text-[13px] text-justify !mt-2 !mb-3">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit,
								</Typography>
								<a
									href=""
									className="!text-[14px] !font-semibold"
								>
									Purchase Now{' '}
									<ArrowRightAlt className="!text-[24px]" />
								</a>
							</div>
						</div>
					</div>
					<div className="bg-[#F3F1EE] rounded-[16px]">
						<div className="flex flex-col gap-4 p-4">
							<div>
								<img
									src="public/img/book-5.png"
									alt=""
									className="w-full rounded-[8px]"
								/>
							</div>
							<div>
								<Typography className="!text-[17px] !font-bold">
									Lorem ipsum dolor
								</Typography>
								<Typography className="!text-[13px] text-justify !mt-2 !mb-3">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit,
								</Typography>
								<a
									href=""
									className="!text-[14px] !font-semibold"
								>
									Purchase Now{' '}
									<ArrowRightAlt className="!text-[24px]" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<img
				src="public/img/petir-cta.png"
				alt=""
				className="absolute z-[-1]"
			/>
			<div className="max-w-2xl mx-auto py-16 mt-16 text-center">
				<Typography className="!text-6xl !font-bold">
					The best checkout for your brand
				</Typography>
				<Typography className="!text-lg !font-medium !mt-6">
					Learn more about how Bolt can empower your business, whether
					by augmenting your existing shopping experiences or handling
					end-to-end checkout for you.
				</Typography>
			</div>

			<div className="bg-[#11190C] text-white mt-24">
				<div className="max-w-7xl mx-auto py-16">
					<div className="grid grid-cols-3 justify-items-center	 gap-8">
						<div>
							<Typography className="!text-xl !font-bold">
								My Website
							</Typography>
							<Typography className="!text-zinc-300 !text-[14px] !mt-4">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
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
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit
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
		</>
	);
}

export default Home;
