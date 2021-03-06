import React , {useState} from "react";
import ProductService from "../Services-9/ProducrServices";

let ProductCard = () => {

    let [state,setState] = useState({
        products : ProductService.getAllProducts()
    })

    let {products} = state;

    return (
        <React.Fragment>
        <div className="container mt-5">
                 <div className="row">
                     <div className="col">
                           <p className="h3 text-success">Product Card</p>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                           orem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                             specimen book. </p>
                     </div>
                 </div>
             </div>
            <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                      
                         {
                             products.map((product) => {
                                return(
                                    <div key={product.sno} className="card shadow-lg mt-3">
                                        <div  className="card-body bg-light ">  
                                               <div className="row align-items-center">
                                                   <div className="col-md-4">
                                                      <img src={product.image} alt="" className="img-fluid"/>
                                                   </div>
                                                   <div className="col-md-6">
                                                       <h5 className="display-4">{product.name}</h5>
                                                       <h6 className="display-6">&#8377;{product.price.toFixed(2)}</h6>
                                                       <h6 className="display-6">
                                                           {
                                                               product.qty >= 10 && <span className="text-success">Available</span> 
                                                           }
                                                           {
                                                               product.qty <= 10 && product.qty >= 1 && <span className="text-warning">Almost out of stock</span> 
                                                           }
                                                           {
                                                               product.qty == 0 && <span className="text-danger">out of stock</span> 
                                                           }
                                                       </h6>
                                                   </div>
                                               </div>
                                        </div>
                                     </div>
                                )
                             })
                         }
                     
                </div>
            </div>
        </div>
        </React.Fragment>
    )
};

export default ProductCard;