import React, { useState, useEffect } from 'react';

import './App.scss';
import './styles/general.scss';
import { ProductsList } from './components/ProductsList';
import { CurrentProduct } from './components/CurrentProduct';

export const App = () => {
  const [products, setProducts] = useState('');
  const [comments, setComments] = useState('');
  const [productInfo, setProductInfo] = useState(null);
  const [commentForProduct, setCommentsForProduct] = useState(null);
  const [selectedProductId, setselectedProductId] = useState(0);
  const [productSelected, setProductSelected] = useState(false);

  const PRODUCT_URL = 'https://api.jsonbin.io/b/610e7a3ad5667e403a3af3c8/2';
  const COMMENT_URL = 'https://api.jsonbin.io/b/610e7bd4e1b0604017a847b0';

  const getAllProducts = async() => {
    const searchResult = await fetch(PRODUCT_URL)
      .then(response => response.json())
      .then(result => result.data);

    setProducts(searchResult);
  };

  const getAllComments = async() => {
    const searchResult = await fetch(COMMENT_URL)
      .then(response => response.json())
      .then(result => result);

    setComments(searchResult);
  };

  useEffect(() => {
    Promise.all([
      getAllProducts(),
      getAllComments(),
    ]);

    return () => {
    };
  }, []);

  useEffect(() => {
    if (comments) {
      const productComments = comments.filter(comment => (
        comment.productId === selectedProductId
      ));

      setCommentsForProduct(productComments);
    }
  }, [products, selectedProductId]);

  const productsSortBy = (sortBy) => {
    setProducts(prevproducts => (
      [...prevproducts].sort((prevProduct, nextProduct) => {
        switch (sortBy) {
          case 'name': {
            return nextProduct.name.localeCompare(prevProduct.name);
          }

          case 'quantity': {
            return prevProduct.count - nextProduct.count;
          }

          case 'reverse': {
            return prevProduct.name.localeCompare(nextProduct.name);
          }

          default: {
            return 0;
          }
        }
      })));
  };

  const changeCurentProductsInList
  = (productThatChange, productThatChangeId) => {
    setProducts(prevproducts => (
      [...prevproducts].map((product) => {
        if (product.id === productThatChangeId) {

          productThatChange.comments = product.comments;
          setselectedProductId(0);

          return productThatChange;
        }

        return product;
      })));
  };

  const addNewProductToList = (newProductInfo) => {
    setProducts((prevProducts) => {
      const id = prevProducts.length + 1;

      newProductInfo.id = id;

      return (
        [...prevProducts, newProductInfo]
      );
    });
  };

  const deleteProductFromList = (productId) => {
    setProducts(prevListOfProduct => (
      [...prevListOfProduct].filter(product => product.id !== productId)
    ));
  };

  return (
    <div className="App">
      <div className="App__sidebar">
        { products
          ? (
            <div className="App__buttons-container">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => {
                  productsSortBy('name');
                }}
              >
                sort by name
              </button>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => {
                  productsSortBy('quantity');
                }}
              >
                sort by quantity
              </button>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => {
                  productsSortBy('reverse');
                }}
              >
                sort by name reverse
              </button>
            </div>
          )
          : (
            <div
              className="spinner-border text-primary"
              role="status"
            />
          )
        }
        { products
          ? (
            <ProductsList
              deleteProductFromList={deleteProductFromList}
              setProductSelected={setProductSelected}
              products={products}
              setselectedProductId={setselectedProductId}
              setProductInfo={setProductInfo}
              commentsWithData={comments}
            />
          )
          : '   Loading...'
        }
      </div>
      <div className="App__content">
        <div className="App__content-container">
          {
            productSelected ? (
              <CurrentProduct
                addNewProductToList={addNewProductToList}
                setProductSelected={setProductSelected}
                changeCurentProductsInList={changeCurentProductsInList}
                productInfo={productInfo}
                comments={commentForProduct}
              />
            ) : 'No product selected'
          }
        </div>
      </div>
    </div>
  );
};
