import { ArrowRightAlt } from '@mui/icons-material';
import { Typography } from '@mui/material';

function Buku() {
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
