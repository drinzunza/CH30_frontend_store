import './catalog.css';
import Product from './product';
import { useEffect, useState } from 'react';
import DataService from '../services/dataService';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const loadData = () => {
    let service = new DataService(); // instance of the class
    let prods = service.getCatalog();
    setProducts(prods);

    let uniques = [];
    for (let i = 0; i < prods.length; i++) {
      let prod = prods[i];
      // if the category does NOT exist in the uniques array, add it
      if (!uniques.includes(prod.category)) {
        uniques.push(prod.category);
      }
    }
    setCategories(uniques);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="catalog">
      <h1>Check our amazing catalog</h1>

      <div className="filters">
        {categories.map((cat) => (
          <button key={cat} className="btn btn-sm btn-secondary">
            {cat}
          </button>
        ))}
      </div>

      <div className="product-list">
        {products.map((prod) => (
          <Product key={prod._id} data={prod}></Product>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
