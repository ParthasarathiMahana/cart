const CartItem=(props) => {
        const {title, price, qty} = props.product;

        const {
            product,
            onIncreaseQty,
            onDecreaseQty,
            onDeleteItem
        } = props;

        return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image}/>
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>                
                <div style={{color:'#777'}}>Rs {price}</div>
                <div style={{color:'#777'}}>qty: {qty}</div>
                <div className="cart-item-actions">
                    <img 
                        className="action-icons" 
                        onClick={() => {onIncreaseQty(product)}} 
                        src="https://www.svgrepo.com/show/506282/plus-circle.svg"
                    />
                    <img 
                        className="action-icons" 
                        onClick={()=>{onDecreaseQty(product)}} 
                        src="https://www.svgrepo.com/show/505437/minus-circle.svg"
                    />
                    <img 
                        className="action-icons" 
                        src="https://www.svgrepo.com/show/447911/bin.svg"
                        onClick={()=>{onDeleteItem(product.id)}}/>
                </div>
            </div>
        </div>
    );
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