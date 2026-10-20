import { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import FormInput from './components/FormInput';
import ItemList from './components/ItemList';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const total = items.reduce((sum, i) => sum + i.jumlah, 0);
    document.title = total > 0
      ? `(${total}) Keranjang Belanja`
      : 'Keranjang Belanja';
  }, [items]);

  const handleAddItem = (item) => {
    setItems((prev) => {
      const exist = prev.find(
        (i) => i.nama.toLowerCase() === item.nama.toLowerCase()
      );
      if (exist) {
        return prev.map((i) =>
          i.id === exist.id ? { ...i, jumlah: i.jumlah + item.jumlah } : i
        );
      }
      return [item, ...prev];
    });
  };

  const handleRemove = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleUpdateQty = (id, jumlah) => {
    if (jumlah < 1) return;
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, jumlah } : i)));
  };

  const handleClearAll = () => {
    if (window.confirm('Yakin ingin mengosongkan keranjang?')) {
      setItems([]);
    }
  };

  const totalItems = items.reduce((sum, i) => sum + i.jumlah, 0);
  const totalHarga = items.reduce((sum, i) => sum + i.harga * i.jumlah, 0);

  return (
    <div className="app">
      <Header totalItems={totalItems} totalPrice={totalHarga} />

      <div className="main">
        <FormInput onAddItem={handleAddItem} />

        <ItemList
          items={items}
          onRemove={handleRemove}
          onUpdateQty={handleUpdateQty}
          onClearAll={handleClearAll}
        />
      </div>
    </div>
  );
};

export default App;