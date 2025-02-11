import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {
   
   
     var   imageURL = product
          ? `${API}/product/photo/${product.product._id}`
          : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
     return (
         
          <div className="rounded border border-white p-2">
               <img
                    src={imageURL}
                    alt="prodImg"
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                    className="rounded"
               />
          </div>
     );
};

export default ImageHelper;
