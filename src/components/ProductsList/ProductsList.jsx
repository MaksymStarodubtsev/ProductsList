import React from 'react';
import './ProductsList.scss';

export const ProductsList = (
  {
    products,
    setselectedProductId,
    setProductInfo,
    setProductSelected,
    commentsWithData,
    deleteProductFromList
  }) => (
    <div>
      <div>
        <ul className="ProductsList__list">
          {products.map((product, index) => {
            const {
              imageUrl,
              id,
              name,
              count,
              size,
              weight,
              comments
            } = product;

            return (
              <div className="ProductList__container d-flex flex-row flex-wrap">
                <div className="card" style={{ width: '18rem' }}>
                  <div className="ProductsList__photo-container">
                    <img src={imageUrl} className="card-img-top ProductsList__photo" alt="" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                      Product diccription
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Count: {count}</li>
                    <li className="list-group-item"> size: {`${size.width} x ${size.height}`}</li>
                    <li className="list-group-item">weight: {weight}</li>
                  </ul>
                  <div className="card-body d-flex justify-content-between">
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      onClick={() => {
                        setProductSelected(true);
                        setselectedProductId(id);
                        setProductInfo(product);
                      }}
                    >
                      Edit &nbsp;{id}
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      type="button"
                      onClick={() => {
                        deleteProductFromList(id);
                      }}
                    >
                      Delete &nbsp;{id}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
);
