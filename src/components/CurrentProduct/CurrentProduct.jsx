import React, { useState, useEffect } from 'react';
import './CurrentProduct.scss';

export const CurrentProduct = (
  {
    productInfo,
    comments,
    changeCurentProductsInList,
    setselectedProductId,
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
          <div className="ProductList__container d-flex flex-row flex-wrap justify-content-center">

            <div className="card" style={{ width: '18rem' }}>
              <div className="ProductsList__photo-container">
                <img src={imageUrl} className="card-img-top ProductsList__photo" alt="" />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <input
                    required
                    className="form-control"
                    type="text"
                    onChange={(event) => setNameEditingInfo(event.target.value)}
                    value={nameEditingInfo}
                  />
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card s content.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <input
                    required
                    className="form-control"
                    type="number"
                    onChange={event => setCountEditingInfo(event.target.value)
                    }
                    value={countEditingInfo}
                  />
                </li>
                <li className="list-group-item">
                  <input
                    required
                    className="form-control"
                    type="number"
                    placeholder="Width"
                    onChange={(event) => (
                      setSizeWidthEditingInfo(event.target.value)
                    )}
                    value={sizeWidthEditingInfo}
                  />
                </li>
                <li className="list-group-item">
                  <input
                    required
                    className="form-control"
                    type="number"
                    placeholder="Height"
                    onChange={(event) => (
                      setSizeHeightEditingInfo(event.target.value)
                    )}
                    value={sizeHeightEditingInfo}
                  />
                </li>
                <li className="list-group-item">
                  <input
                    className="form-control"
                    type="text"
                    onChange={(event) => setWeightEditingInfo(event.target.value)}
                    value={weightEditingInfo}
                  />
                </li>
                <li className="list-group-item">A third item</li>
              </ul>
            </div>

          </div>

          {/* <table border="1">
            <tr>
              <td colSpan="2">
                <img
                  src={imageUrl}
                  alt={`product ${name}`}
                  className="ProductsList__image"
                />
              </td>
            </tr>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">
                <input
                  required
                  type="text"
                  onChange={(event) => setNameEditingInfo(event.target.value)}
                  value={nameEditingInfo}
                />
              </th>
            </tr>
            <tr>
              <td>count</td>
              <td>
                <input
                  required
                  type="number"
                  onChange={event => setCountEditingInfo(event.target.value)
                  }
                  value={countEditingInfo}
                />
              </td>
            </tr>
            <tr>
              <td>size</td>
              <td>
                <input
                  required
                  type="number"
                  placeholder="Width"
                  onChange={(event) => (
                    setSizeWidthEditingInfo(event.target.value)
                  )}
                  value={sizeWidthEditingInfo}
                />
                <input
                  required
                  type="number"
                  placeholder="Height"
                  onChange={(event) => (
                    setSizeHeightEditingInfo(event.target.value)
                  )}
                  value={sizeHeightEditingInfo}
                />
              </td>
            </tr>
            <tr>
              <td>weight</td>

              <td>
                <input
                  type="text"
                  onChange={(event) => setWeightEditingInfo(event.target.value)}
                  value={weightEditingInfo}
                />
              </td>
            </tr>
          </table> */}
          <div className="CurrentProduct__user-button-container">
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
              btn btn-outline-warning
                "
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
            {comments.map(coment => (
              <li>{coment.description}{coment.date }</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
