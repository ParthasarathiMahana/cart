import React from "react";
import Cart  from "./Cart";
import Navbar from "./Navbar"
import app from './index';
import {getFirestore, collection, getDocs, onSnapshot, addDoc, updateDoc, doc, deleteDoc, query, where, orderBy} from "firebase/firestore";

class App extends React.Component 
{
  constructor(){
    super();
    this.state = {
        products : [],
        loading  : true
    }
  }

componentDidMount(){
    const db = getFirestore(app);
    const collections = collection(db, "products");
    // const documents = getDocs(collections);

    // const q = query(collections, where("price", "==", 1000));

    // const q = query(collections, orderBy("price", "asc"));

    onSnapshot(collections, (snapshot)=>{
      const products =  snapshot.docs.map((doc)=>{
        const product =  doc.data();
        product['id'] = doc.id;
        return product;
      })


    // documents.then((res)=>{
    //   const products =  res.docs.map((doc)=>{
    //     const product =  doc.data();
    //     product['id'] = doc.id;
    //     return product;
    //   })

      this.setState({
        products : products,
        // products : q,
        loading: false
      });
    });
}

addProduct=()=>{
  const db = getFirestore(app);
  const collections = collection(db, "products");
  addDoc(collections, {title:"Watch", qty:1, price:1000, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-EZgctTOuQXBTfdxz2JNDRxof9ExYLVHrQ&usqp=CAU"})
}

  increaseQty = (product) => {
      var{ products } = this.state;
      const index = products.indexOf(product);

      const db = getFirestore(app);
      const productDoc = doc(db, "products", products[index].id)
      updateDoc(productDoc,{qty: products[index].qty+1});

      // products[index].qty += 1;
      // this.setState({products : products});
  }

  decreaseQty = (product) => {
      var{ products } = this.state;
      const index = products.indexOf(product);

      if(products[index].qty > 0){
        const db = getFirestore(app);
        const productDoc = doc(db, "products", products[index].id)
        updateDoc(productDoc,{qty: products[index].qty-1});

          // products[index].qty -= 1;
          // this.setState({products : products});
      }
      else{
          this.setState({products : products});
      }
  }

  deleteItem = (id) => {
      const {products} = this.state;

      const db = getFirestore(app);
      const productsDoc = doc(db, "products", id);
      deleteDoc(productsDoc);

      // const items = products.filter((product)=>product.id != id);
      // this.setState({products : items});
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
    const {products, loading} = this.state;
    return (
      <div className="App">
        <Navbar cartCount={this.getCartCount()} />
        {/* <button onClick={this.addProduct}>Add Product</button> */}
        <Cart 
          products={products}
          onIncreaseQty={this.increaseQty}
          onDecreaseQty={this.decreaseQty}
          onDeleteItem={this.deleteItem}  
        />
        {loading && <h1>Loading Products...</h1>}
      <div>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
