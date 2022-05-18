import React, {useState} from "react";

let ShopingCard = () => {

    let [state,setState] = useState({
        products : [
            {
                sno : 'AA001',
                image : 'https://m.media-amazon.com/images/I/61OUIIXnPqL._AC_UX522_.jpg',
                name : 'MI Watch',
                price : 1500,
                qty : 0
            },
            {
                sno : 'AA002',
                image : 'https://m.media-amazon.com/images/I/81nC4u9eYfL._UY445_.jpg',
                name : 'SUMSUNG Watch',
                price : 1600,
                qty : 0
            },
            {
                sno : 'AA003',
                image : 'https://media.istockphoto.com/photos/watch-picture-id471712723?k=20&m=471712723&s=612x612&w=0&h=0KCGIGUbondcwPRxjsKDXVKVj-AWYvEqftYQKvLvdw4=',
                name : 'Apple Watch',
                price : 1800,
                qty : 0
            },
            {
                sno : 'AA004',
                image : 'https://m.media-amazon.com/images/I/71gdBQP+qGL._UY741_.jpg',
                name : 'Fire-Bolt Watch',
                price : 1500,
                qty : 0
            },
            {
                sno : 'AA005',
                image : 'https://m.media-amazon.com/images/I/61WixzlVuXL._UL1280_.jpg',
                name : 'Sonata Watch',
                price : 1300,
                qty : 0
            }
        ]
    })

    let {products} = state;

    let incrQty = (productId) => {
         // filter the data for updating qty
        let items = products.map(product => {
            if(product.sno === productId){
                return {
                    ...product,
                    qty : product.qty + 1
                }
            }
            return product;
        });

        //update the state with new data
        setState((state) =>({
            products: [...items]
        }))
    };

    let decrQty = (productId) => {
        // filter the data for updating qty
       let items = products.map(product => {
           if(product.sno === productId){
               return {
                   ...product,
                   qty : product.qty - 1 > 0 ? product.qty -1 : 1
               }
           }
           return product;
       });

       //update the state with new data
       setState((state) =>({
           products: [...items]
       }))
   };

   let grandTotal = () => {
       let total = 0 ;
       for(let product of products){
           total += product.price * product.qty;
       }
       return total;
   };

    return(
        <React.Fragment>
            <div className="container mt-5">
                 <div className="row">
                     <div className="col">
                           <p className="h3 text-success">Shoping Card</p>
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
                                  {
                                      products.map((product) => {
                                          return(
                                                    <tr key={product.sno}>
                                                <td>{product.sno}</td>
                                                <td>
                                                <img src={product.image} width={50} height={50}/>
                                                </td>
                                                <td>{product.name}</td>
                                                <td>&#8377;{product.price.toFixed(2)}</td>
                                                <td>
                                                    <i onClick={() => incrQty(product.sno)} className="fa-solid fa-square-plus mx-2"></i>
                                                        {product.qty}
                                                    <i onClick={() => decrQty(product.sno)} class="fa-solid fa-square-minus mx-2"></i>
                                                    </td>
                                                <td>&#8377;{(product.qty * product.price).toFixed(2)}</td>
                                               </tr>
                                          )  
                                      })
                                  }
                                      <tr>
                                          <td colSpan={4}></td>
                                          <td>Grand Total : </td>
                                          <td>&#8377;{grandTotal().toFixed(2)}</td>
                                      </tr>
                                  </tbody>
                            </table>
                        </div>
                  </div>
             </div>
        </React.Fragment>
    )
}

export default ShopingCard;