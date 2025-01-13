import { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@mui/material';

const FormAkun = ({ editData, onClose }) => {
	const [formData, setFormData] = useState(editData || { name: '' });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(
				editData
					? `http://127.0.0.1:8000/api/akun/${editData.id}`
					: 'http://127.0.0.1:8000/api/akun',
				{
					method: editData ? 'PUT' : 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(formData)
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
				label="Name"
				name="name"
				value={formData.name}
				onChange={handleChange}
				margin="normal"
				required
				size="small"
			/>
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
FormAkun.propTypes = {
	editData: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string
	}),
	onClose: PropTypes.func.isRequired
};

export default FormAkun;
