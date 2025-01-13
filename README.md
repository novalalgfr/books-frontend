# Membuat Tampilan Admin (View, Create, Edit, dan Delete)

### File AdminAkun.jsx (Untuk Menampilkan Tabel)

1. Menyesuaikan URL API yang digunakan: Pada bagian kode ini, Anda perlu memastikan URL API yang akan dipanggil sesuai dengan yang Anda gunakan. Cari bagian kode berikut pada baris ke-28 dan 46 dan ubah sesuai dengan URL API yang Anda inginkan.

    ```bash
    const response = await fetch('http://127.0.0.1:8000/api/akun');
    ```

2. Menyesuaikan kolom-kolom di header tabel: Pada bagian ini, Anda bisa mengubah kolom-kolom yang ada di tabel, seperti "ID", "Name", dan "Actions". Cari bagian kode pada baris ke-95 dan sesuaikan nama kolomnya.

    ```bash
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
    ```

3. Menyesuaikan kolom-kolom data tabel: Setelah menyesuaikan header, Anda juga perlu menyesuaikan data yang ditampilkan di dalam tabel. Cari bagian kode pada baris ke-108 dan ubah sesuai nama kolom yang ada pada data Anda.

    ```bash
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
    ```

    \*Penjelasan: Di bagian ini, {row."nama kolom"} digunakan untuk menampilkan data sesuai dengan nama kolom pada tabel.

4. Untuk memanggil gambar
    ```bash
    img
        src={`http://127.0.0.1:8000/storage/${row.cover_buku}`}
        alt={row.judul}
        style={{ width: '100px', height: 'auto', borderRadius: '8px' }}
    />
    ```

### File FormAkun.jsx (Untuk Form Create dan Edit)

1. Menyesuaikan kolom-kolom yang ada pada form: Di bagian ini, Anda harus menyesuaikan data form agar sesuai dengan kolom yang ingin diinputkan. Misalnya, jika Anda ingin memasukkan "Name", pastikan kolom tersebut ada pada state formData. Ubah bagian kode berikut pada baris ke-6:

    ```bash
    const [formData, setFormData] = useState(editData || { name: '' });
    ```

2. Menyesuaikan URL API untuk Create dan Edit: Anda juga perlu menyesuaikan URL API berdasarkan apakah Anda sedang melakukan editing atau membuat data baru. Pada kode ini, jika ada data yang diedit (editData), maka API URL-nya akan berisi ID dari data yang diedit. Ubah URL pada baris berikut:

    ```bash
    editData
        ? `http://127.0.0.1:8000/api/akun/${editData.id}`
        : 'http://127.0.0.1:8000/api/akun',
    ```

3. Menambahkan input field sesuai kolom tabel: Di bagian form, Anda harus menambahkan TextField (input field) untuk setiap kolom yang ingin dimasukkan. Sebagai contoh, jika ingin menambahkan kolom "Name", Anda dapat menambahkan input text seperti ini pada baris ke-40:

    ```bash
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
    ```

    \*Contoh seperti textfield name

4. Menambahkan proptypes untuk validasi data: Untuk memastikan data yang dikirimkan valid, Anda perlu menambahkan PropTypes yang sesuai dengan struktur data yang ada. Sebagai contoh, jika data yang digunakan memiliki kolom id dan name, maka Anda dapat menambahkan PropTypes seperti ini pada baris ke-62:

    ```bash
    FormAkun.propTypes = {
        editData: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        }),
        onClose: PropTypes.func.isRequired
    };
    ```

    \*Di isi seperti name, di isi dibawah id
