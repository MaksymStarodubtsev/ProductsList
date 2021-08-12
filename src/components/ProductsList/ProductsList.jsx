import React from 'react';
import './ProductsList.scss';

export const ProductsList = ({ products, setselectedProductId, setProductInfo, setProductSelected, comments }) => (
  <div>
    <div>
      <ul className="ProductsList__list">
        {products.map(product => {
          const { imageUrl, id, name, count, size, weight, comments } = product;

          return (
            <div className="ProductList__container d-flex flex-row flex-wrap justify-content-between">

            <div className="card" style={{ width: '18rem' }}>
              <div className="ProductsList__photo-container">
                <img src={imageUrl} className="card-img-top ProductsList__photo" alt="" />
              </div>
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card s content.
                </p>
                {/* {comments.map(coment => (
                  <p>{coment.description}</p>
                ))} */}
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
              <div className="card-body">
                <a href="#about" className="card-link">Card link</a>
                <a href="#home" className="card-link">Another link</a>
              </div>
            </div>

          </div>

          // <div key={id} className="ProductsList__card">
          //   <li className="ProductsList__item ProductsList__item--unchecked">
          //     <table border="1">
          //       <tr>
          //         <td colSpan="2" className="ProductsList__photo-container">
          //           <img
          //             src={imageUrl}
          //             alt={`product ${name}`}
          //             className="ProductsList__image"
          //           />
          //         </td>
          //       </tr>
          //       <tr>
          //         <th scope="col">Product</th>
          //         <th scope="col">{name}</th>
          //       </tr>
          //       <tr>
          //         <td>count</td>
          //         <td>{count}</td>
          //       </tr>
          //       <tr>
          //         <td>size</td>
          //         <td>
          //           {size.width}
          //           x
          //           {size.height}
          //         </td>
          //       </tr>
          //       <tr>
          //         <td>weight</td>
          //         <td>{weight}</td>
          //       </tr>
          //       <tr>
          //         <td>comments</td>
          //         <td>{comments.map(coment => <span>{coment}</span>)}</td>
          //       </tr>
          //     </table>
          //   </li>

          //   <div className="ProductsList__item ProductsList__item--checked">

          //     <button
          //       className="ProductsList__user-button button"
          //       type="button"
          //       onClick={() => {
          //         setProductSelected(true);
          //         setselectedProductId(id);
          //         setProductInfo(product);
          //       }}
          //     >
          //       Edit &nbsp;{id}
          //     </button>
          //   </div>
          // </div>
          );
        })}
      </ul>
      {/* ................ */}
    </div>
  </div>
);
