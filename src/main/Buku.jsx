import { ArrowRightAlt } from '@mui/icons-material';
import { TextField, Typography } from '@mui/material';

function Buku() {
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
		</>
	);
}

export default Buku;
