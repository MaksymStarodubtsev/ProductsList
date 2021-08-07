import React from 'react';
import './CurrentProduct.scss';

export const CurrentProduct = ({ productInfo, comments }) => {
  const { imageUrl, id, name, count, size, weight } = productInfo;

  return (
    <div className="ProductsList__card">
      <li className="ProductsList__item ProductsList__item--unchecked">
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
            <th scope="col">{name}</th>
          </tr>
          <tr>
            <td>count</td>
            <td>{count}</td>
          </tr>
          <tr>
            <td>size</td>
            <td>
              {size.width}
              x
              {size.height}
            </td>
          </tr>
          <tr>
            <td>weight</td>
            <td>{weight}</td>
          </tr>
        </table>

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
