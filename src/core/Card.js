import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import ImageHelper from "./helper/ImageHelper";


const Card = (
     product,
     AddtoCart = true,
    
     // removeFromCart = false,
     
     
     setReload = (f) => f, // function (f) return (f)
     reload = undefined,
) => {

     console.log(removeFromCart);
      
     const [redirect, setRedirect] = useState(false);
     const { count, setCount } = useState(product.count);

     const cartTitle = product.product ? product.product.name : "A photo from Pexels";
     const cartDescription = product.product
          ? product.product.description
          : "This is a Test Description.";
     const cartPrice = product.product  ? product.product .price : "0";

     const addToCart = () => {
          addItemToCart(product.product, () => setRedirect(true));
     };

     const getARedirect = (redirect) => {
          if (redirect) {
               return <Redirect to="/cart" />;
          }
     };

     const showAddtoCart = () => {
          return (
               AddtoCart && (
                    <button
                         onClick={addToCart}
                         className="btn btn-block btn-outline-success mt-2 mb-2"
                    >
                         Add to Cart
                    </button>
               )
          );
     };

     const showRemoveFromCart = removeFromCart => {
          return (
             
               removeFromCart && (
                    <button
                         onClick={() => {
                              removeItemFromCart(product.product._id);
                              setReload(!reload);
                         }}
                         className="btn btn-block btn-outline-danger mt-2 mb-2"
                    >
                         Remove from cart
                    </button>
               )
          );
     };

     return (
          <div className="card text-white bg-dark border border-info">
               <div className="card-header lead">{cartTitle}</div>
               <div className="card-body">
                    {getARedirect(redirect)}
                    <ImageHelper product={product} />
                    <p className="lead bg-success font-weight-normal text-wrap mt-2">
                     {cartDescription}
                    </p>
                    <p className="btn btn-success rounded  btn-sm px-4">
                  ${cartPrice}
                    </p>
                    <div className="row">
                         <div className="col-12">
                              {showAddtoCart(AddtoCart)}
                         </div>
                         <div className="col-12">
                              {showRemoveFromCart(removeFromCart)}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Card;
