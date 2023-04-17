import React from "react";

const Navbar = () =>{
    return(
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://www.svgrepo.com/show/506144/cart-4.svg" alt="cart-icon"/>
                <span style={styles.cartCount}>3</span>
            </div>
        </div>
    );
}


const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '1px 6px',
      position: 'absolute',
      right: 10,
      top: -9
    }
  };

  export default Navbar;