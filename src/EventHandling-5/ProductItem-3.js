import React, {useState} from "react";

let ProductItem = () => {

    let [state , setState] = useState({
        product : {
            sno : 'AA001',
            image : 'https://m.media-amazon.com/images/I/61OUIIXnPqL._AC_UX522_.jpg',
            name : 'MI Watch',
            price : 1500,
            qty : 0
        }
    });

    let {product} = state;

    let incrQty = () => {
        setState((state) => ({
            product : {
                ...state.product,
                qty : state.product.qty + 1
            }
        }));
    };

    let decrQty = () => {
        setState((state) => ({
            product : {
                ...state.product,
                qty : state.product.qty - 1 > 0 ? state.product.qty - 1 : 1
            }
        }));
    };

    return(
        <React.Fragment>
             <div className="container mt-5">
                 <div className="row">
                     <div className="col">
                           <p className="h3 text-success">Product Item</p>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                           orem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                             specimen book. </p>
                     </div>
                 </div>
             </div>
             <div className="container mt-3">
                  <div className="row">
                         <div className="col">
                            <table className="table table-striped text-center table-hover">
                                  <thead className="bg-dark text-white">
                                      <tr>
                                          <th>SNO</th>
                                          <th>Image</th>
                                          <th>Name</th>
                                          <th>Price</th>
                                          <th>Qty</th>
                                          <th>Total</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>{product.sno}</td>
                                          <td><img src={product.image} width={50} height={50}/></td>
                                          <td>{product.name}</td>
                                          <td>{product.price}</td>
                                          <td><i onClick={incrQty} className="fa-solid fa-square-plus mx-2"></i>
                                                {product.qty}
                                              <i onClick={decrQty} class="fa-solid fa-square-minus mx-2"></i></td>
                                          <td>{product.qty * product.price}</td>
                                      </tr>
                                  </tbody>
                            </table>
                        </div>
                  </div>
             </div>
        </React.Fragment>
    )
}
export default ProductItem;