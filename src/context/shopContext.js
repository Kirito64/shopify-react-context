import React, { Component } from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();

const client = Client.buildClient({
  // storefrontAccessToken: "dd4d4dc146542ba7763305d71d1b3d38",
  // domain: "graphql.myshopify.com",

  storefrontAccessToken: "a7ce0cd08798ed1e61853de86626a066",
  domain: "the-sastech-com.myshopify.com",
});

class ShopProvider extends Component {
  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
    collections: [],
    collection: {},
  };
  
  componentDidMount() {
    // this.createCheckout();

    //Check if localStorage has a checkout_id saved
    if (localStorage.checkout) {
      this.fetchCheckout(localStorage.checkout);
    } else {
      this.createCheckout();
    }
    this.fetchCollections();
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout", checkout.id);
    this.setState({ checkout: checkout });
  };

  fetchCheckout = async (checkoutId) => {
    client.checkout
      .fetch(checkoutId)
      .then((checkout) => {
        this.setState({ checkout: checkout });
      })
      .catch((err) => console.log(err));
  };

  addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemsToAdd
    );
    this.setState({ checkout: checkout });

    this.openCart();
  };

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products: products });
  };

  fetchProductWithId = async (id) => {
    const product = await client.product.fetch(id);
    this.setState({ product: product });
    return product;
  };

  clearProduct = ()=>{
    this.setState({product: null});
  };

  clearProducts = ()=>{
    this.setState({products: []});
  };

  closeCart = () => {
    this.setState({ isCartOpen: false });
  };
  openCart = () => {
    this.setState({ isCartOpen: true });
  };
  
  fetchCollections= async ()=>{
    const collections = await client.collection.fetchAll();
    this.setState({collections: collections})
    return collections
  }
  fetchCollection = async (id)=>{

    const collection = await client.collection.fetchByHandle(id);
    this.setState({collection: collection});
    // this.setState({products: collection.products});
    
    return collection.products
  }

  clearCollection = ()=>{
    this.setState({collection: null})
  }



  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithId: this.fetchProductWithId,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addItemToCheckout: this.addItemToCheckout,
          clearProduct: this.clearProduct,
          clearProducts: this.clearProducts,
          fetchCollections: this.fetchCollections,
          fetchCollection : this.fetchCollection,
          clearCollection: this.clearCollection,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
