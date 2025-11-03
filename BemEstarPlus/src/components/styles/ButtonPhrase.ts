import styled from "styled-components";

type ContainerProps = {
    $width?: string;
};

export const Container = styled.div<ContainerProps>`
    @import url('https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap');
    /* largura padrão é $width se fornecido, senão 300px; para telas pequenas (<325px) usamos 200px como padrão */
    width: ${props => props.$width ?? '300px'};

    @media (max-width: 324px) {
        width: 200px;
    }
    @media (max-height: 645px) {
        height: 50px;
    }
    height: 71px;

    button{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #F2947B;
        border-radius: 15px;
        border-width: 3px;
        border-style: solid;
        border-color: rgba(50, 50, 50, 0.2);
    }

    p{
        margin: 0;
        color: #FFFFFF;
        font-size: 32px;
        font-family: 'Comic Sans MS', cursive;
        @media (max-width: 324px) {
            font-size: 24px;
        }
        @media (max-height: 645px) {
            font-size: 16px;
        }
    }
    
    /* loading image styles */
    .loading-img {
        width: 32px;
        height: 32px;
        display: inline-block;
        vertical-align: middle;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;