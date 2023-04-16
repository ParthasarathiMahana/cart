import React from "react";

class CartItem extends React.Component{

    // creating states
    constructor(){
        super();
        this.state = {
            title : "Mobile Phone",
            price : 9999,
            qty : 1, 
            img :''
        }
    }

    increaseQuantity(){
        console.log(this);
    }

    render(){
    
        const {title, price, qty} = this.state;

        return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image}/>
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{this.state.title}</div>                
                <div style={{color:'#777'}}>Rs {price}</div>
                <div style={{color:'#777'}}>qty: {qty}</div>
                <div className="cart-item-actions">
                    <img className="action-icons" onClick={increaseQuantity} src="https://www.svgrepo.com/show/506282/plus-circle.svg"/>
                    <img className="action-icons" src="https://www.svgrepo.com/show/505437/minus-circle.svg"/>
                    <img className="action-icons" src="https://www.svgrepo.com/show/447911/bin.svg"/>
                </div>
            </div>
        </div>
    );}
}

const styles = {
    image:{
        height : 110,
        width : 110,
        background: '#ccc',
        borderRadius : 5
    }
}

export default CartItem;