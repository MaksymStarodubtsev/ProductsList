import React from 'react';
import './ProductsList.scss';

export const ProductsList = ({ products, setselectedProductId, setProductInfo, setProductSelected }) => (
  <div className="ProductsList">
    <div className="ProductsList__list-container">
      <ul className="ProductsList__list">
        {products.map(product => {
          const { imageUrl, id, name, count, size, weight, comments } = product;

          return (
            <div key={id} className="ProductsList__card">
              <li className="ProductsList__item ProductsList__item--unchecked">
                <table border="1">
                  <tr>
                    <td colSpan="2" className="ProductsList__photo-container">
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
                  <tr>
                    <td>comments</td>
                    <td>{comments.map(coment => <span>{coment}</span>)}</td>
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

                <button
                  className="ProductsList__user-button button"
                  type="button"
                  onClick={() => {
                    setProductSelected(true);
                    setselectedProductId(id);
                    setProductInfo(product);
                  }}
                >
                  Edit &nbsp;{id}
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  </div>
);
