const ItemCard = ({ item, onRemove }) => {
  const formatRp = (val) => 'Rp ' + Math.round(val).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return (
    <div className="item-card">
      <div className="item-card-top">
        <div>
          <p className="item-name">{item.nama}</p>
          <p className="item-price">{formatRp(item.harga)} / pcs</p>
        </div>
        <button
          className="btn-delete"
          onClick={() => onRemove(item.id)}
          id={`btn-hapus-${item.id}`}
          aria-label={`Hapus ${item.nama}`}
        >
          ✕
        </button>
      </div>
      <div className="item-card-bottom">
        <span className="item-qty-label">Jumlah: {item.jumlah} pcs</span>
        <span className="item-subtotal">{formatRp(item.harga * item.jumlah)}</span>
      </div>
    </div>
  );
};

export default ItemCard;