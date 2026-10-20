const Header = ({ totalItems, totalPrice }) => {
  const formatRp = (val) => 'Rp ' + Math.round(val).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return (
    <header className="header">
      <h1>Keranjang <span>Belanja</span></h1>
      <p>Kelola daftar belanjaan kamu di sini</p>
      <div className="header-stats">
        <div className="stat">
          <span>{totalItems}</span>
          <span>Total Item</span>
        </div>
        <div className="stat">
          <span>{formatRp(totalPrice)}</span>
          <span>Total Harga</span>
        </div>
      </div>
    </header>
  );
};

export default Header;