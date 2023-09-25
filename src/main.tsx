import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <CartContextProvider>
    <BrowserRouter>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode>, */}
    </BrowserRouter>
  </CartContextProvider>
)
