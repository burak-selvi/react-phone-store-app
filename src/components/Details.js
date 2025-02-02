import React from 'react'
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default function Details() {
  return (
    <ProductConsumer>
      {value => {
        const { id, company, img, info, price, title, inCart, isLiked } = value.detailProduct;
        return (
          <div className="container py-5">
            {/* title */}
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
              </div>
            </div>
            {/* end title */}
            {/* product info */}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-5 text-capitalize">
                <img src={img} alt="product" className="img-fluid" />
              </div>
              {/* product text */}
              <div className="col-10 mx-auto col-md-6 my-5 text-capitalize">
                <div className="d-flex justify-content-between"><h2>model: {title}</h2><h2><i className={`fa${isLiked ? 's' : 'r'} fa-heart`} onClick={() => value.toggleLike(id)}></i></h2></div>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  made by: <span className="text-uppercase">
                    {company}
                  </span>
                </h4>
                <h4 className="text-blue">
                  <strong>
                    price: <span>$</span>{price}
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  some info about product:
                  </p>
                <p className="text-muted lead">
                  {info}
                </p>
                {/* buttons */}
                <div>
                  <Link to="/">
                    <ButtonContainer>
                      back to products
                      </ButtonContainer>
                  </Link>
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
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}
