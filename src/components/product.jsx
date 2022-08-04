import './product.css';
import QuantityPicker from './quantityPicker';

const Product = () => {
  return (
    <div className="product">
      <img src="https://picsum.photos/200/300" alt="Product" />

      <h5>Title here</h5>

      <QuantityPicker />
    </div>
  );
};

export default Product;
