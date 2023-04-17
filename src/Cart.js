import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{

    constructor(){
        super();
        this.state = {
            products : [{
                title : "Mobile Phone",
                price : 9999,
                qty : 1, 
                img :''
            },{
                title : "watch",
                price : 999,
                qty : 1, 
                img :''
            },{
                title : "Laptop",
                price : 99999,
                qty : 1, 
                img :''
            }]
        }
    }

    render(){

        const { products } = this.state;
        return(
            <div className="cart">
                {products.map((product)=>{return <CartItem product={product}/>})}
            </div>
        );
    }
}
export default Cart;