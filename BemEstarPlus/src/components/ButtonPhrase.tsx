import { Container } from "./styles/ButtonPhrase";
import loadingIcon from "../assets/loading.png";

interface ButtonPhraseProps {
    nome: string;
    onTouch: () => void;
    width?: string;
    loading?: boolean;
}

function Button({ nome, onTouch, width = '300px', loading  }: ButtonPhraseProps) {
    return (
        <Container $width={width}>
            <button onTouchStart={onTouch} >
                <p>
                    {loading
                        ?
                        <img src={loadingIcon} alt="loading" className="loading-img" />
                        :
                        nome
                    }
                </p>
            </button>
        </Container>
    )
}

export default Button;