import React from 'react';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';


export default function Favorites() {
  return (
    <ProductConsumer>
      {value => {
        const { removeFromFavorites, likedProducts } = value;
        const { inCart } = value.detailProduct;
        if (likedProducts.length > 0) {
          return (
            <div className="container mt-3">
              <div className="row">
                {value.likedProducts.map(product => {
                  const { id, img, price, title } = product;

                  return (
                    <div key={id} className="col-3 col-md-4 mt-1 text-center text-capitalize p-5">
                      <img src={img} className="img-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price : $ {price}</h5>
                      <ButtonContainer onClick={() => removeFromFavorites(id)} >
                        remove
                    </ButtonContainer>
                      <ButtonContainer
                        cart
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? 'inCart' : 'add to cart'}
                      </ButtonContainer>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        } else {
          return (
            <div className="container mt-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                  <h1>your favorites is currently empty</h1>
                </div>
              </div>
            </div>
          )
        }

      }}
    </ProductConsumer>
  )
}
