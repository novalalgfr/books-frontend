import { useEffect, useState } from 'react';
import {
	Typography,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Button,
	Dialog,
	DialogContent,
	DialogTitle
} from '@mui/material';
import FormBuku from './FormBuku';
import { Add, Delete, Edit } from '@mui/icons-material';

const AdminBuku = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [openForm, setOpenForm] = useState(false);
	const [editData, setEditData] = useState(null);

	const fetchData = async () => {
		setLoading(true);
		try {
			const response = await fetch('http://127.0.0.1:8000/api/...');
			const result = await response.json();
			if (result.success) {
				setData(result.data);
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleDelete = async (id) => {
		try {
			await fetch(`http://127.0.0.1:8000/api/.../${id}`, {
				method: 'DELETE'
			});
			fetchData();
		} catch (error) {
			console.error('Error deleting data:', error);
		}
	};

	const handleOpenForm = (row = null) => {
		setEditData(row);
		setOpenForm(true);
	};

	const handleCloseForm = () => {
		setEditData(null);
		setOpenForm(false);
		fetchData();
	};

	return (
		<div className="p-6">
			<div className="bg-[#F3F1EE] rounded-[16px] p-6 mb-6">
				<Typography className="!font-black !text-2xl !mb-6">
					Table Buku
				</Typography>
				<Button
					variant="contained"
					color="primary"
					onClick={() => handleOpenForm()}
					className="!mb-4 !py-2 !px-4 !shadow-none !rounded !normal-case !font-medium"
				>
					<Add className="!mr-2 !text-[20px]" />
					Buat Buku
				</Button>

				{loading ? (
					<Typography>Loading...</Typography>
				) : (
					<TableContainer
						component={Paper}
						sx={{
							boxShadow: 'none',
							borderRadius: '8px'
						}}
					>
						<Table>
							<TableHead className="!bg-[#11190C]">
								<TableRow>
									<TableCell className="!text-white !font-semibold">
										ID
									</TableCell>
									<TableCell className="!text-white !font-semibold">
										Name
									</TableCell>
									<TableCell className="!text-white !font-semibold">
										Actions
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{data.map((row) => (
									<TableRow key={row.id}>
										<TableCell>{row.id}</TableCell>
										<TableCell>{row.name}</TableCell>
										<TableCell>
											<Button
												variant="contained"
												color="primary"
												onClick={() =>
													handleOpenForm(row)
												}
												className="!mb-4 !py-2 !px-4 !shadow-none !normal-case !font-medium !rounded-l-md !rounded-r-none"
											>
												<Edit className="!mr-2 !text-[20px]" />
												Edit
											</Button>
											<Button
												variant="contained"
												color="error"
												onClick={() =>
													handleDelete(row.id)
												}
												className="!mb-4 !py-2 !px-4 !shadow-none !normal-case !font-medium !rounded-l-none !rounded-r-md"
											>
												<Delete className="!mr-2 !text-[20px]" />
												Delete
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				)}
			</div>

			<Dialog
				open={openForm}
				onClose={handleCloseForm}
			>
				<DialogTitle>
					{editData ? 'Edit Buku' : 'Buat Buku'}
				</DialogTitle>
				<DialogContent>
					<FormBuku
						editData={editData}
						onClose={handleCloseForm}
					/>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default AdminBuku;
