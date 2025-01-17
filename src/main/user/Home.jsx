import { ArrowRightAlt } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

function Home() {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchBooks = async () => {
		setLoading(true);
		try {
			const response = await fetch('http://127.0.0.1:8000/api/buku');
			const result = await response.json();
			if (result.success) {
				setBooks(result.data);
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchBooks();
	}, []);

	const images = [
		'public/img/official-store-1.svg',
		'public/img/official-store-2.svg',
		'public/img/official-store-3.svg',
		'public/img/official-store-4.svg',
		'public/img/official-store-5.svg',
		'public/img/official-store-6.svg'
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
						{images.map((src, index) => (
							<img
								key={index}
								src={src}
								alt={`Official Store ${index + 1}`}
							/>
						))}
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
					{loading
						? Array.from({ length: 5 }).map((_, index) => (
								<div
									key={index}
									className="bg-[#F3F1EE] rounded-[16px] flex flex-col h-full animate-pulse"
								>
									<div className="flex flex-col gap-4 p-4 flex-grow">
										<div className="bg-gray-300 w-full h-48 rounded-[8px]"></div>
										<div className="flex flex-col flex-grow gap-2">
											<div className="bg-gray-300 h-4 w-1/2 rounded"></div>
											<div className="bg-gray-300 h-5 w-3/4 rounded"></div>
											<div className="bg-gray-300 h-3 w-full rounded !mt-2 !mb-3 flex-grow"></div>
										</div>
										<div className="flex items-end">
											<div className="bg-gray-300 h-4 w-1/4 rounded"></div>
										</div>
									</div>
								</div>
						  ))
						: books.map((book, index) => (
								<div
									key={index}
									className="bg-[#F3F1EE] rounded-[16px] flex flex-col h-full"
								>
									<div className="flex flex-col gap-4 p-4 flex-grow">
										<div>
											<img
												src={`http://127.0.0.1:8000/storage/${book.cover_buku}`}
												alt={book.judul_buku}
												className="w-full rounded-[8px]"
											/>
										</div>
										<div className="flex flex-col flex-grow">
											<Typography className="!text-[15px] !font-bold">
												${book.harga_buku}
											</Typography>
											<Typography className="!text-[17px] !font-bold">
												{book.judul_buku}
											</Typography>
											<Typography className="!text-[13px] text-justify !mt-2 !mb-3 flex-grow">
												{book.deskripsi_buku}
											</Typography>
										</div>
										<div className="flex items-end">
											<a
												href="#"
												className="!text-[14px] !font-semibold flex items-center"
											>
												Beli Sekarang{' '}
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
