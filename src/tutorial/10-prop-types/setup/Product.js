import React from 'react';
import PropTypes from 'prop-types';
// stackblitz not finding this. don't know why.
import defaultImage from '../../../assets/default-image.jpeg';

const Product = (props) => {
  const { name, price, image } = props.product;
  const url = image && image.url; // otherwise we can't use 'defaultImage'
  return (
    <article className="product">
      {/* this one throws an error because one of the product object doesn't contain image key at all.
      so we use 'prop-types' and 'defaultProps' to handle. */}
      <img src={url || defaultImage} alt={name || 'default name'} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
};

// we replaced this by using '||' operator
// Product.defaultProps = {
//   name: 'default name',
//   price: 3.05,
//   image: defaultImage,
// };

export default Product;
