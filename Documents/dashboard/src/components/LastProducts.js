import React from 'react' ;
import { useEffect, useState } from "react";

function LastProduct(props){
	const [countProducts, setCountProducts] = useState();
	
useEffect(()=>{
	fetch('http://localhost:3000/api/products')
	.then(response => response.json())
	.then(data => setCountProducts(data.count.count))
});
/*const LastItem = data.data.products[data.data.products.length -1]*/


    return( 
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Ultimo producto cargado</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src="assets/images/product_dummy.svg" alt="image dummy"></img>{countProducts}
                    </div>
                    
                    <a target="_blank" rel="nofollow" href="/">View product detail</a>
                </div>
            </div>
        </div>
        
    );
}

export default LastProduct ;