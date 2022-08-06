import './product.css';
import QuantityPicker from './quantityPicker';

const Product = (props) => {
  return (
    <div className="product">
      <img src={'/images/' + props.data.image} alt="Product" />

      <h5>{props.data.title}</h5>

      <div className="prices">
        <label class="total">Total: ${props.data.price.toFixed(2)}</label>
        <label class="price">Price: ${props.data.price.toFixed(2)}</label>
      </div>

      <QuantityPicker />
    </div>
  );
};

export default Product;
