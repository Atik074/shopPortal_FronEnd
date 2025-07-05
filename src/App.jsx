import { RouterProvider } from "react-router-dom";
import FavProductProvider from "./providers/FavProductProvider";
import { ProductProvider } from "./providers/ProductProvider";
import router from "./routes/router";


function App() {
  return (
    <ProductProvider>
      <FavProductProvider>
          <RouterProvider router={router}/>
      </FavProductProvider>
    </ProductProvider>
  );
}

export default App;
