// components/CityList.js
import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="row">
        <div className="col-sm-12">
          <div className="table-responsive">
            <table className="table table-bordered table-striped table-sm text-wrap">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.category}</td>
                    <td>${product.price}</td>
                    <td><a href={`products/${product.id}`}>Detail</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default ProductList;
