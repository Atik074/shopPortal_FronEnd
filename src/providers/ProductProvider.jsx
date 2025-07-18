import { useEffect, useState } from "react";
import { ProductContext } from "../context";
import Swal from "sweetalert2";

export const ProductProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCartProducts(JSON.parse(stored));
  }, []);



  // Save to localStorage
   useEffect(()=>{
      localStorage.setItem('cart' ,JSON.stringify(cartProducts))
   } ,[cartProducts])


  // Add item into cart
  const addToCart = (product) => {
    const isInCart = cartProducts.some(productItem =>productItem.id === product.id);

      if (isInCart) {
          return Swal.fire({
            title: "Already add in cart ",
            icon: "info",
          });
        } else {
         return setCartProducts((prev) => [...prev, product]);
        }
  };

  // Remove item from cart
  const removeFromCart = (id) => {

    setCartProducts((prev) => prev.filter(product => product.id !== id));


  };


  /// increase product quantity from cart
  const increaseQuantity = (id) => {

     setCartProducts(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ) 
    );
  };

  //decrease product quantity from cart
const decreaseQuantity = (id) => {
  setCartProducts(prevCart => {
    return prevCart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  });
};


  // Clear all products from cart
  const clearCart = () => setCartProducts([]);

  

  return (
    <ProductContext.Provider value={{
       cartProducts,
        setCartProducts,
        addToCart,
        removeFromCart ,
        increaseQuantity ,
        decreaseQuantity ,
        clearCart
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
