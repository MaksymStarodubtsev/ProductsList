import React from 'react';
import './App.scss';
import './styles/general.scss';
import { ProductsList } from './components/ProductsList';
import { CurrentProduct } from './components/CurrentProduct';
import productList from './components/api/products.json';

class App extends React.Component {
  state = {
    products: [...productList],
    selectedProductId: 0,
  };

  render() {
    const { products, selectedProductId } = this.state;

    return (
      <div className="App">
        <div className="App__sidebar">
          <ProductsList products={products} />
        </div>

        <div className="App__content">
          <div className="App__content-container">
            {selectedProductId ? (
              <CurrentProduct userId={selectedProductId} />
            ) : 'No user selected'}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
