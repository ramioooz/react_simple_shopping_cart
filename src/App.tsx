import { Routes, Route } from 'react-router-dom'
import Store from './pages/Store'
import About from './pages/About'
import Navbar from './components/Navbar'
import { Container } from 'react-bootstrap'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from './context/CartContext'
import SplashScreen from './components/SplashScreen'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
function App() {

  const [loading, setLoading] = useState(true); // <-- initial value

  const { dispatch } = useContext(CartContext)

  useEffect(() => {
    // console.log('public url: ', import.meta.env.BASE_URL);
    // get we prepare the app
    async function initFn() {
      await dispatch({ type: "LOAD_ITEMS" });
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    }
    initFn();
  }, [])

  return (
    <>
      {(loading) ?
        <SplashScreen /> :
        <div
          // style={{ position: "relative" }}
        >
          <Navbar />
          <Container className='mt-3'>
            <Routes>
              {/* <Route path='/' element={<Home />} /> */}
              <Route path='/' element={<Store />} />
              <Route path='/about' element={<About />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </Container>
        </div>
      }
    </>
  )
}

export default App

