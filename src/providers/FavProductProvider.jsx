import { FavProductContext } from "@/context";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const FavProductProvider = ({ children }) => {
  const [favItems, setFavItems] = useState([]);

  //get favourite product from local storage
  useEffect(() => {
    const favouriteProduct = localStorage.getItem("fav");

    if (favouriteProduct) {
      setFavItems(JSON.parse(favouriteProduct));
    }
  }, []);

  //set favourite product into local storage
  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(favItems));
  }, [favItems]);

  // handle Toggle into FavItem
  const toggleFavItem = (product) => {
    const isInFav = favItems.some((favItem) => {
      return favItem.id === product.id;
    });

    if (isInFav) {
      return setFavItems((prev) =>prev.filter((item) => item.id !== product.id)

      );
    } else {
      return setFavItems((prev) => [...prev, product]);
    }
  };


  // is favortie product cheacked 
    const isFav=(id)=>{

       return  favItems.some(favItem =>favItem.id === id )
    }
  return (
    <FavProductContext.Provider
      value={{
        favItems,
        setFavItems,
        toggleFavItem,
        isFav
      }}
    >
      {children}
    </FavProductContext.Provider>
  );
};

export default FavProductProvider;
