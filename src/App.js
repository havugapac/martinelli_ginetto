import Home from './components/home/home.jsx';
import Cart from './components/home/cart.jsx';
import Checkout from './components/home/chechout.jsx';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CartContext, CartContextProvider } from './components/home/contexts/cart_context.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/checkout",
    element: <Checkout/>
  },
]);

function App() {
  return (
    <div className="App">
      <CartContextProvider>
     <RouterProvider router={router}/>
     </CartContextProvider>
    </div>
  );
}

export default App;
