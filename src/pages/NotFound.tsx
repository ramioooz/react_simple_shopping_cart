import { Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

const containerStyle : React.CSSProperties = { 
  height: "100vh", 
  width: "200px", 
  paddingTop: "100px",
  display: "flex", 
  // alignItems: "center", 
  justifyContent: "center", 
  // border: "1px solid", 
  // marginBottom: "50px",
  // marginTop: "auto"
  // position: "relative"
  // position: "absolute"
};

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container
      style={containerStyle}>
      <div 
      className="d-flex flex-column align-items-center"
      // style={{position: "absolute", left: 0}}
      >

      <h1>404</h1>
      <div>Page not found</div>
      <Button className="mt-5" onClick={() => navigate("/")}>Return Home</Button>
      </div>
    </Container>
  )
}

export default NotFound