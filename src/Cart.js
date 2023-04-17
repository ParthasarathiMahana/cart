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

    increaseQty = (product) => {
        var{ products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;
        this.setState({products : products});
    }

    decreaseQty = (product) => {
        var{ products } = this.state;
        const index = products.indexOf(product);

        if(products[index].qty > 0){
            products[index].qty -= 1;
            this.setState({products : products});
        }
        else{
            this.setState({products : products});
        }
    }

    render(){

        const { products } = this.state;
        return(
            <div className="cart">
                {products.map((product, index)=>{
                    return <CartItem 
                    product={product} 
                    key={index}
                    onIncreaseQty={this.increaseQty}
                    onDecreaseQty={this.decreaseQty}
                    />})}
            </div>
        );
    }
}
export default Cart;