import React, { useState, useEffect } from 'react';
import './CurrentProduct.scss';

export const CurrentProduct = ({ productInfo, comments }) => {
  const { imageUrl, id, name, count, size, weight } = productInfo;

  const [productEditingInfo, setProductEditingInfo] = useState('');

  const [imageUrlEditingInfo, setImageUrlEditingInfo] = useState('');
  const [idEditingInfo, setIdEditingInfo] = useState('');
  const [nameEditingInfo, setNameEditingInfo] = useState('');
  const [countEditingInfo, setCountEditingInfo] = useState('');
  const [sizeEditingInfo, setSizeEditingInfo] = useState('');
  const [weightEditingInfo, setWeightEditingInfo] = useState('');

  useEffect(() => {
    const sizeWidthHeight = `${size.width} x ${size.height}`;

    setImageUrlEditingInfo(imageUrl);
    setIdEditingInfo(id);
    setNameEditingInfo(name);
    setCountEditingInfo(count);
    setSizeEditingInfo(sizeWidthHeight);
    setWeightEditingInfo(weight);
    console.log('mount');
  }, []);

  return (
    <div className="ProductsList__card">
      <li className="ProductsList__item ProductsList__item--unchecked">
        <form>
          <table border="1">
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
                  type="text"
                  onChange={(event) => setCountEditingInfo(event.target.value)}
                  value={countEditingInfo}
                />
              </td>
            </tr>
            <tr>
              <td>size</td>
              <td>
                <input
                  type="text"
                  onChange={(event) => setSizeEditingInfo(event.target.value)}
                  value={sizeEditingInfo}
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
          </table>
          <button
            className="
                  ProductsList__user-button
                  ProductsList__user-button--selected
                  button
                "
            type="button"
          >
            Change Products
          </button>
        </form>
        {/* <button
      className="
                  ProductsList__user-button
                  ProductsList__user-button--selected
                  button
                "
      type="button"
    >
      User&nbsp;#1
    </button> */}
      </li>

      <div className="ProductsList__item ProductsList__item--checked">
        <div>
          <h3>Comments</h3>
          <ul>
            {comments.map(coment => (
              <li>{coment.description}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
