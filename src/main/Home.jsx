import { ArrowRightAlt } from '@mui/icons-material';
import { Typography } from '@mui/material';

function Home() {
	const books = [
		{
			image: 'public/img/book-1.png',
			price: '$4.99',
			title: 'Pride and Prejudice (The Peacock Edition)',
			description: 'Kisah cinta klasik penuh prasangka dan harga diri.'
		},
		{
			image: 'public/img/book-2.png',
			price: '$3.49',
			title: 'A Clockwork Orange',
			description:
				'Distopia kekerasan, kebebasan, dan moralitas manusia terganggu.'
		},
		{
			image: 'public/img/book-3.png',
			price: '$5.99',
			title: 'The Grapes of Wrath',
			description: 'Perjuangan keluarga miskin di era Depresi Besar.'
		},
		{
			image: 'public/img/book-4.png',
			price: '$2.99',
			title: 'American Psycho',
			description: 'Kehidupan gila seorang bankir psikopat di kota.'
		},
		{
			image: 'public/img/book-5.png',
			price: '$4.99',
			title: 'Brave New World',
			description: 'Dunia futuristik dengan kontrol total dan hedonisme.'
		}
	];

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
							Temukan Buku Favoritmu di Sini!
						</Typography>
						<Typography className="!mt-4">
							Jelajahi ribuan koleksi buku dari berbagai genre.
							Mulai perjalanan membaca yang seru dan menginspirasi
							hanya dengan beberapa klik!
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
				<div className="max-w-5xl mx-auto py-24">
					<Typography className="!text-5xl !font-black text-center text-white">
						Kenapa Memilih
						<span className="!text-[#E6FF00]"> Books</span> ?
					</Typography>
					<div className="grid grid-cols-3 gap-4 mt-16">
						<div className="col-span-2 bg-[#F3F1EE] rounded-[16px] p-6">
							<div className="grid grid-cols-2 items-end gap-4">
								<div>
									<Typography className="!text-2xl !font-bold">
										Koleksi Buku Lengkap untuk Semua Pembaca
									</Typography>
									<Typography className="!text-[14px] !mt-2 !mb-3">
										Temukan ribuan pilihan buku dari
										berbagai genre untuk memenuhi selera
										baca Anda.
									</Typography>
									{/* <a
										href=""
										className="!text-[14px] !font-semibold"
									>
										Explore Now{' '}
										<ArrowRightAlt className="!text-[24px]" />
									</a> */}
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
										className="!h-[200px]"
									/>
								</div>
								<div>
									<Typography className="!text-2xl !font-bold">
										Belanja Buku dengan Layanan Terpercaya
									</Typography>
									<Typography className="!text-[14px] !mt-2 !mb-3">
										Nikmati proses belanja yang cepat, aman,
										dan nyaman untuk setiap pembelian.
									</Typography>
									{/* <a
										href=""
										className="!text-[14px] !font-semibold"
									>
										Explore Now{' '}
										<ArrowRightAlt className="!text-[24px]" />
									</a> */}
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
						Penjualan Terbaik Kami!
					</Typography>
					<a
						href="/buku"
						className="!text-[14px] !font-semibold"
					>
						Selengkapnya <ArrowRightAlt className="!text-[24px]" />
					</a>
				</div>
				<div className="grid grid-cols-5 gap-4 mt-12">
					{books.map((book, index) => (
						<div
							key={index}
							className="bg-[#F3F1EE] rounded-[16px] flex flex-col h-full"
						>
							<div className="flex flex-col gap-4 p-4 flex-grow">
								<div>
									<img
										src={book.image}
										alt={book.title}
										className="w-full rounded-[8px]"
									/>
								</div>
								<div className="flex flex-col flex-grow">
									<Typography className="!text-[15px] !font-bold">
										{book.price}
									</Typography>
									<Typography className="!text-[17px] !font-bold">
										{book.title}
									</Typography>
									<Typography className="!text-[13px] text-justify !mt-2 !mb-3 flex-grow">
										{book.description}
									</Typography>
								</div>
								<div className="flex items-end">
									<a
										href=""
										className="!text-[14px] !font-semibold flex items-center"
									>
										Purchase Now{' '}
										<ArrowRightAlt className="!text-[24px] ml-2" />
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<img
				src="public/img/petir-cta.png"
				alt=""
				className="absolute z-[-1]"
			/>
			<div className="max-w-2xl mx-auto py-16 mt-16 text-center">
				<Typography className="!text-6xl !font-bold">
					Siap untuk Membaca Buku Favoritmu?
				</Typography>
				<Typography className="!text-lg !font-medium !mt-6">
					Ayo mulai perjalananmu sekarang! Temukan buku terbaik dan
					nikmati pengalaman membaca yang tak terlupakan.
				</Typography>
			</div>
		</>
	);
}

export default Home;
