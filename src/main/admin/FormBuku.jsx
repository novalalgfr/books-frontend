import { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@mui/material';
import { Desk } from '@mui/icons-material';

const FormBuku = ({ editData, onClose }) => {
	const [formData, setFormData] = useState(
		editData || {
			judul_buku: '',
			deskripsi_buku: '',
			harga_buku: '',
			cover_buku: ''
		}
	);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		setFormData((prev) => ({ ...prev, cover_buku: file }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// Gunakan FormData untuk menangani file upload
			const payload = new FormData();
			payload.append('name', formData.name);
			if (formData.cover_buku) {
				payload.append('cover_buku', formData.cover_buku);
			}

			const response = await fetch(
				editData
					? `http://127.0.0.1:8000/api/.../${editData.id}`
					: 'http://127.0.0.1:8000/api/...',
				{
					method: editData ? 'PUT' : 'POST',
					body: payload // FormData digunakan sebagai body
				}
			);

			const result = await response.json();
			if (result.success) {
				onClose();
			}
		} catch (error) {
			console.error('Error submitting form:', error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				fullWidth
				label="Judul Buku"
				name="judul_buku"
				value={formData.judul_buku}
				onChange={handleChange}
				margin="normal"
				required
				size="small"
			/>
			<TextField
				fullWidth
				label="Buku"
				name="deskripsi_buku"
				value={formData.deskripsi_buku}
				onChange={handleChange}
				margin="normal"
				required
				size="small"
			/>
			<TextField
				fullWidth
				label="Harga Buku"
				name="harga_buku"
				value={formData.harga_buku}
				onChange={handleChange}
				margin="normal"
				required
				size="small"
			/>
			<TextField
				fullWidth
				label="Cover Buku"
				name="cover_buku"
				value={formData.cover_buku}
				onChange={handleChange}
				margin="normal"
				required
				size="small"
			/>

			<label
				htmlFor="cover_upload"
				style={{ display: 'block', marginTop: '16px' }}
			>
				<input
					type="file"
					name="cover_buku"
					id="cover-upload"
					onChange={handleFileChange}
					style={{ display: 'none' }}
				/>
				<Button
					variant="outlined"
					component="span"
				>
					Upload Cover Buku
				</Button>
			</label>
			{formData.cover_buku && (
				<p style={{ marginTop: '8px' }}>
					Selected File: {formData.cover_buku.name}
				</p>
			)}

			<Button
				type="submit"
				variant="contained"
				color="primary"
				className="!mt-4"
			>
				{editData ? 'Edit' : 'Buat'}
			</Button>
		</form>
	);
};
FormBuku.propTypes = {
	editData: PropTypes.shape({
		id: PropTypes.number,
		judul_buku: PropTypes.string,
		deskripsi_buku: PropTypes.string,
		harga_buku: PropTypes.string,
		cover_buku: PropTypes.instanceOf(File)
	}),
	onClose: PropTypes.func.isRequired
};

export default FormBuku;
