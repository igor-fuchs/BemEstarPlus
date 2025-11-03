import LogoImage from '../assets/logo.png';
import { Container } from "./styles/Logo";

interface LogoProps {
  height: string;
  fontSize: string;
  gap: string;
}

function Logo({ height, fontSize, gap }: LogoProps) {
  return (
    <Container
      $height={height}
      $fontSize={fontSize}
      $gap={gap}
    >
      <img src={LogoImage} alt="BemEstar+" />
      <h1>BemEstar+</h1>
    </Container>
  )
}

export default Logo;