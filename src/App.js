import React from "react";
import Cart  from "./Cart";
import Navbar from "./Navbar"

class App extends React.Component 
{
  constructor(){
    super();
    this.state = {
        products : [{
            title : "Mobile Phone",
            price : 9999,
            qty : 1, 
            img :'',
            id : 0
        },{
            title : "watch",
            price : 999,
            qty : 1, 
            img :'',
            id : 1
        },{
            title : "Laptop",
            price : 99999,
            qty : 1, 
            img :'',
            id : 2
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

  deleteItem = (id) => {
      const {products} = this.state;
      const items = products.filter((product)=>product.id != id);

      this.setState({products : items});
  }

  getCartCount = () =>{
    const{products}= this.state;
    var count =0;
    products.forEach((product)=>{
      count += product.qty;
    });
    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;
    
    var total = 0;

    products.map((product)=>{
      total += product.qty * product.price;
    });

    return total;
  }


  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar cartCount={this.getCartCount()} />
        <Cart 
          products={products}
          onIncreaseQty={this.increaseQty}
          onDecreaseQty={this.decreaseQty}
          onDeleteItem={this.deleteItem}  
        />
      <div>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
