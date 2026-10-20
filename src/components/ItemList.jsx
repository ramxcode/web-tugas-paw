import ItemCard from './ItemCard';

const ItemList = ({ items, onRemove, onClearAll }) => {
  const formatRp = (val) => 'Rp ' + Math.round(val).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  const totalHarga = items.reduce((sum, item) => sum + item.harga * item.jumlah, 0);
  const totalJumlah = items.reduce((sum, item) => sum + item.jumlah, 0);

  return (
    <div className="card">
      <div className="list-header">
        <h2>Daftar Belanja ({items.length})</h2>
        {items.length > 0 && (
          <button className="btn-clear" id="btn-kosongkan" onClick={onClearAll}>
            Kosongkan
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="empty">
          <p>🛒</p>
          <p>Keranjang masih kosong</p>
        </div>
      ) : (
        <>
          <div className="item-list">
            {items.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onRemove={onRemove}
              />
            ))}
          </div>

          <div className="summary-rows" style={{ marginTop: '16px' }}>
            <div className="summary-row">
              <span>Total item</span>
              <span>{totalJumlah} pcs</span>
            </div>
            <div className="summary-row total">
              <span>Total Harga</span>
              <span>{formatRp(totalHarga)}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemList;