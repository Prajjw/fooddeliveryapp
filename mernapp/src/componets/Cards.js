import React from 'react'
import {useDispatchCart,useCart}  from './ContexReducer'
export default function Cards(props) {
   
    
   let options = props.options;
   let priceOptions = Object.keys(options)
   let fooditem = props.fooditems
   const handleAddToCart = () =>{

   }


    return (
        <div>
            <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
            <img src= {props.fooditem.img} className="card-img-top" alt="..."style={{height:"120px", objectFit: "fill"}} />
            <div className="card-body">
                <h5 className="card-title">{props.fooditem.name}</h5>
                <p className="card-text">This is my hotel website</p>
                <div className='container w-100'>
                    <select className='m-2 h-100 bg-success rounded'>
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}> {i + i} </option>
                            )
                        })}
                    </select>
                    <select className='m-2 h-100 bg-success rounded'>
                        {priceOptions.map((data)=>{
                            return <option  key ={data} value={data}>{data}</option>
                        })}

                    </select>
                    <div className='d-inline h-100fs-5'>
                        Total Price
                    </div>
                </div>
                <hr>
                </hr>
                <button className= {'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
        </div></div>
    );
}
