import { useState } from 'react';

const FormInput = ({ onAddItem }) => {
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [jumlah, setJumlah] = useState(1);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};
    if (!nama.trim()) err.nama = 'Nama produk wajib diisi';
    if (!harga || Number(harga) <= 0) err.harga = 'Masukkan harga yang valid';
    if (jumlah < 1) err.jumlah = 'Jumlah minimal 1';
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    onAddItem({
      id: Date.now(),
      nama: nama.trim(),
      harga: Number(harga),
      jumlah: Number(jumlah),
    });

    setNama('');
    setHarga('');
    setJumlah('');
    setErrors({});
  };

  const handleChange = (setter, field) => (e) => {
    setter(e.target.value);
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <div className="card">
      <h2>Tambah Produk</h2>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="nama">Nama Produk</label>
          <input
            id="nama"
            type="text"
            placeholder="Contoh: Indomie Goreng"
            value={nama}
            onChange={handleChange(setNama, 'nama')}
          />
          {errors.nama && <span className="form-error">{errors.nama}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="harga">Harga (Rp)</label>
          <input
            id="harga"
            type="number"
            placeholder="0"
            min="1"
            value={harga}
            onChange={handleChange(setHarga, 'harga')}
          />
          {errors.harga && <span className="form-error">{errors.harga}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="jumlah">Jumlah</label>
          <input
            id="jumlah"
            type="number"
            min="1"
            value={jumlah}
            onChange={handleChange(setJumlah, 'jumlah')}
          />
          {errors.jumlah && <span className="form-error">{errors.jumlah}</span>}
        </div>

        <button type="submit" className="btn-submit" id="btn-tambah">
          + Tambah ke Keranjang
        </button>
      </form>
    </div>
  );
};

export default FormInput;