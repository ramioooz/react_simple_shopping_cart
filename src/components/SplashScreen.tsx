import { Container } from 'react-bootstrap'
import { RiseLoader } from 'react-spinners'

const SplashScreen = () => {
  return (
    <Container 
    style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}
    // className='d-flex flex-column justify-content-center align-items-center'
    >
      <div
      className='d-flex flex-column justify-content-center align-items-center gap-5'
      style={{ width: "300px", height: "300px", border: "1px solid"}}
    >
      <RiseLoader color="#366cd6" />
      <div>Loading</div>
    </div >
    </Container>
  )
}

export default SplashScreen