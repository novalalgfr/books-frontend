import { ArrowRightAlt } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

function Buku() {
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

	return (
		<>
			<div className="py-48">
				<img
					src="public/img/petir-buku.png"
					alt=""
					className="absolute top-0 right-0 z-[-1]"
				/>
				<div className="max-w-7xl mx-auto ">
					<Typography className="!text-7xl !font-black ">
						Lorem ipsum dolor sit amet
					</Typography>
					<Typography className="!mt-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore
					</Typography>
				</div>
			</div>
			<div className="max-w-7xl mx-auto">
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
		</>
	);
}

export default Buku;
