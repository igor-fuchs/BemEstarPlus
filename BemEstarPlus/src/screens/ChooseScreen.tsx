import { Container } from "./styles/ChooseScreen";
import ButtonPhrase from "../components/ButtonPhrase";
import Logo from "../components/Logo";
import DevelopedBy from "../components/DevelopedBy";
import { ApiCitacoes, ApiFraseDiaria, ApiBilhete, ApiMotivacional, type QuoteResponse } from "../lib/APIs";
import { useState } from "react";

interface ChooseProps {
    setPhraseResponse: (phrase: string) => void;
    setAutorResponse: (autor: string) => void;
}

function Choose({ setPhraseResponse, setAutorResponse }: ChooseProps) {
    const [loadingButton, setLoadingButton] = useState<string | null>(null);

    const handleCitacoes = async () => {
        if(loadingButton !== null) return;

        setLoadingButton('citacoes');
        try {
            const response: QuoteResponse | null = await ApiCitacoes();
            if (response) {
                setPhraseResponse(response.frase);
                setAutorResponse(response.autor);
            } else {
                setPhraseResponse('Erro ao carregar citação. Tente novamente.');
                setAutorResponse('Fuchs');
            }
        } finally {
            setLoadingButton(null);
        }
    };

    const handleFraseDiaria = async () => {
        if(loadingButton !== null) return;

        setLoadingButton('frase');
        try {
            const response: QuoteResponse | null = await ApiFraseDiaria();
            if (response) {
                setPhraseResponse(response.frase);
                setAutorResponse(response.autor);
            } else {
                setPhraseResponse('Erro ao carregar frase. Tente novamente.');
                setAutorResponse('Fuchs');
            }
        } finally {
            setLoadingButton(null);
        }
    };

    const handleBilhete = async () => {
        if(loadingButton !== null) return;

        setLoadingButton('bilhete');
        try {
            const response: QuoteResponse | null = await ApiBilhete();
            if (response) {
                setPhraseResponse(response.frase);
                setAutorResponse(response.autor);
            } else {
                setPhraseResponse('Erro ao carregar bilhete. Tente novamente.');
                setAutorResponse('Fuchs');
            }
        } finally {
            setLoadingButton(null);
        }
    };

    const handleMotivacional = async () => {
        if(loadingButton !== null) return;

        setLoadingButton('motivacional');
        try {
            const response: QuoteResponse | null = await ApiMotivacional();
            if (response) {
                setPhraseResponse(response.frase);
                setAutorResponse(response.autor);
            } else {
                setPhraseResponse('Erro ao carregar mensagem motivacional. Tente novamente.');
                setAutorResponse('Fuchs');
            }
        } finally {
            setLoadingButton(null);
        }
    };

    return (
        <Container>
            <div style={{ marginTop: "50px", display: "flex", gap: "3px" }} >
                <Logo height="100px" fontSize="22px" gap="11px" />
            </div>
            <div style={{ width: "80%", textAlign: "center" }}>
                <p>O que mais te agrada hoje?</p>
            </div>
            <div className="buttons">
                <ButtonPhrase
                    nome="Citações"
                    onTouch={handleCitacoes}
                    loading={loadingButton === 'citacoes'}
                />
                <ButtonPhrase
                    nome="Frase Diária"
                    onTouch={handleFraseDiaria}
                    loading={loadingButton === 'frase'}
                />
                <ButtonPhrase
                    nome="Bilhetes (Inglês)"
                    onTouch={handleBilhete}
                    loading={loadingButton === 'bilhete'}
                />
                <ButtonPhrase
                    nome="Motivacional"
                    onTouch={handleMotivacional}
                    loading={loadingButton === 'motivacional'}
                />
            </div>
            <div style={{ marginBottom: "14px" }}>
                <DevelopedBy />
            </div>
        </Container>
    );
}

export default Choose;