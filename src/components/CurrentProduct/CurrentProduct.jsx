import React, { useState, useEffect } from 'react';
import './CurrentProduct.scss';

export const CurrentProduct = (
  {
    addNewProductToList,
    productInfo,
    comments,
    changeCurentProductsInList,
    setProductSelected,
  },
) => {
  const { imageUrl, id, name, count, size, weight } = productInfo;

  const [imageUrlEditingInfo, setImageUrlEditingInfo] = useState('');
  const [idEditingInfo, setIdEditingInfo] = useState('');
  const [nameEditingInfo, setNameEditingInfo] = useState('');
  const [countEditingInfo, setCountEditingInfo] = useState('');

  const [sizeWidthEditingInfo, setSizeWidthEditingInfo] = useState('');
  const [sizeHeightEditingInfo, setSizeHeightEditingInfo] = useState('');

  const [weightEditingInfo, setWeightEditingInfo] = useState('');

  const [newProductToList, setNewProductToList] = useState({});

  useEffect(() => {
    setImageUrlEditingInfo(imageUrl);
    setIdEditingInfo(id);
    setNameEditingInfo(name);
    setCountEditingInfo(count);

    setSizeWidthEditingInfo(size.width);
    setSizeHeightEditingInfo(size.height);

    setWeightEditingInfo(weight);
  }, [productInfo]);

  useEffect(() => {
    if (newProductToList.size !== undefined) {
      changeCurentProductsInList(newProductToList, id);
      setProductSelected(false);
    }
  }, [newProductToList]);

  return (
    <div className="ProductsList__card">
      <li className="ProductsList__item ProductsList__item--unchecked">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setNewProductToList({
              imageUrl: imageUrlEditingInfo,
              id: idEditingInfo,
              name: nameEditingInfo,
              count: countEditingInfo,
              size: {
                width: sizeWidthEditingInfo,
                height: sizeHeightEditingInfo,
              },
              weight: weightEditingInfo,
            });
          }}
        >
          <div className="
            ProductList__container
            d-flex
            flex-row
            flex-wrap
            justify-content-center"
          >
            <div className="card" style={{ width: '18rem' }}>
              <div className="ProductsList__photo-container">
                <img
                  src={imageUrl}
                  className="card-img-top ProductsList__photo"
                  alt={`Product-${name}`}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <input
                    required
                    className="form-control"
                    type="text"
                    onChange={event => setNameEditingInfo(event.target.value)}
                    value={nameEditingInfo}
                  />
                </h5>
                <p className="card-text">
                  Product description
                </p>
              </div>
              <ul className="list-group list-group-flush align-items-end">
                <li className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon2">url</span>
                  <input
                    required
                    className="form-control"
                    type="text"
                    onChange={event => setImageUrlEditingInfo(event.target.value)
                    }
                    value={imageUrlEditingInfo}
                  />
                </li>
                <li className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon2">count</span>
                  <input
                    required
                    className="form-control"
                    type="number"
                    onChange={event => setCountEditingInfo(event.target.value)
                    }
                    value={countEditingInfo}
                  />
                </li>
                <li className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon2">width</span>
                  <input
                    required
                    className="form-control"
                    type="number"
                    placeholder="Width"
                    onChange={event => (
                      setSizeWidthEditingInfo(event.target.value)
                    )}
                    value={sizeWidthEditingInfo}
                  />
                </li>
                <li className="input-group mb-3">
                  <span class="input-group-text" id="basic-addon2">height</span>
                  <input
                    required
                    className="form-control"
                    type="number"
                    placeholder="Height"
                    onChange={event => (
                      setSizeHeightEditingInfo(event.target.value)
                    )}
                    value={sizeHeightEditingInfo}
                  />
                </li>
                <li className="input-group mb-0 ">
                  <span class="input-group-text" id="basic-addon2">weight</span>
                  <input
                    className="form-control"
                    type="text"
                    onChange={event => setWeightEditingInfo(event.target.value)}
                    value={weightEditingInfo}
                  />
                </li>
              </ul>
            </div>

          </div>
          <div className="CurrentProduct__user-button-container">

            <button
              onClick={() => {
                addNewProductToList({
                  imageUrl: imageUrlEditingInfo,
                  id: idEditingInfo,
                  name: nameEditingInfo,
                  count: countEditingInfo,
                  size: {
                    width: sizeWidthEditingInfo,
                    height: sizeHeightEditingInfo,
                  },
                  weight: weightEditingInfo,
                });
                setProductSelected(false);
              }}
              className="
              btn btn-outline-primary
                "
              type="button"
            >
              add
            </button>

            <button
              className="
              btn btn-outline-success
                "
              type="submit"
            >
              Change
            </button>

            <button
              onClick={() => setProductSelected(false)}
              className="
              btn btn-outline-warning"
              type="button"
            >
              Cancel
            </button>

          </div>
        </form>
      </li>

      <div className="ProductsList__item ProductsList__item--checked">
        <div>
          <h3>Comments</h3>
          <ul>
            { comments
              ? (comments.map(coment => (
                <li>
                  {coment.description}
                  :
                  {coment.date}
                </li>
              )))
              : 'lol'
            }
          </ul>
        </div>
      </div>
    </div>
  );
};
