import { Container } from "./styles/PhraseScreen";
import ButtonPhrase from "../components/ButtonPhrase";
import Logo from "../components/Logo";
import DevelopedBy from "../components/DevelopedBy";
import { Browser } from '@capacitor/browser';

interface PhraseProps {
    setPhraseResponse: (phrase: string) => void;
    setAutorResponse: (autor: string) => void;
    phrase: string;
    autor: string;
}

function Phrase({ setPhraseResponse, setAutorResponse, phrase, autor }: PhraseProps) {
    return (
        <Container>
            <div style={{ marginTop: "50px", display: "flex", gap: "3px" }} >
                <Logo height="100px" fontSize="22px" gap="11px" />
            </div>
            <div style={{ width: "80%", textAlign: "center" }} className="phrase-box">
                <p>
                    "{phrase}"
                </p>
                <p style={{ fontWeight: "bold" }}>
                    - {autor}
                </p>
            </div>
            <div className="buttons">
                <ButtonPhrase nome="Mais Uma" onTouch={() => {
                    setPhraseResponse('');
                    setAutorResponse('');
                }} width="250px" />
                        <ButtonPhrase nome="Feedback" onTouch={async () => {
                            try {
                                await Browser.open({ url: 'https://forms.gle/Fs9giGo5dqZJmFkUA' });
                            } catch (e) {
                                window.open('https://forms.gle/Fs9giGo5dqZJmFkUA', '_blank');
                            }
                        }} width="188px" />
            </div>
            <div style={{ marginBottom: "14px" }}>
                <DevelopedBy />
            </div>
        </Container>
    )
}

export default Phrase;