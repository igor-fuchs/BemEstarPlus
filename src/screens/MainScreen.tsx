import { Container } from "./styles/MainScreen";
import Logo from "../components/Logo";
import Cloud from "../assets/thk-cloud.png";
import DevelopedBy from "../components/DevelopedBy";

function MainScreen() {
  return (
    <Container>
      <div style={{ marginTop: "75px", display: "flex", gap: "3px" }} className="top-message">
        <img src={Cloud} alt="Cloud" style={{height:"24px", width:"24px"}} />
        <p style={{color:"#F2947B", fontSize:"20px"}}>
          Sua dose diária de bem-estar.
        </p>
      </div>
      <div>
        <Logo height="173px" fontSize="32px" gap="19px" />
      </div>
      <div style={{ marginBottom: "14px"}}>
        <DevelopedBy />
      </div>
    </Container>
  );
}

export default MainScreen;