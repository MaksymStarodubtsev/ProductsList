import React from 'react';
import './ProductsList.scss';

export const ProductsList = ({ products }) => (
  <div className="ProductsList">
    {products.map(product => {
      const { imageUrl, name, count, size, weight, comments } = product;

      return (
        <>
          <h2>Product: {name}</h2>

          <div className="ProductsList__list-container">
            <ul className="ProductsList__list">
              <li className="ProductsList__item ProductsList__item--unchecked">
                <label>
                  <input type="checkbox" readOnly />
                  <ul>
                    <li>
                      count-
                      {count}
                    </li>
                    <li>
                      size-
                      {size.width}
                      x
                      {size.height}
                    </li>
                    <li>
                      weight-
                      {weight}
                    </li>
                    <li>
                      comments
                      {comments.map(coment => <span>{coment}</span>)}
                    </li>

                  </ul>
                </label>

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

              <li className="ProductsList__item ProductsList__item--checked">
                <label>
                  <input type="checkbox" checked readOnly />
                  <p>distinctio vitae autem nihil ut molestias quo</p>
                </label>

                <button
                  className="ProductsList__user-button button"
                  type="button"
                >
                  User&nbsp;#2
                </button>
              </li>
            </ul>
          </div>
        </>
      );
    })}
  </div>
);
